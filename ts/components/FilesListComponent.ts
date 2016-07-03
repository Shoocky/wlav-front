import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ProgramSourceService} from '../services/program-source.service';
import {ProgramSource} from '../classes/program-source';
import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';
import { Router }                      from '@angular/router-deprecated';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

const URL = 'http://127.0.0.1:8000/apiuser/' + localStorage.getItem('user_id') +  '/programsource';


@Component({
    selector: 'files',
    directives: [SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS,
                 UPLOAD_DIRECTIVES],
    templateUrl: 'templates/files-list.component.html'
})
export class FilesListComponent implements OnInit {
    files : ProgramSource[];
    filesTmp: Array<ProgramSource>;
    verificationCalls : VerificationCall[];
    fileCalls: Array<VerificationCall> = new Array<VerificationCall>();
    initDone = false;

    uploadFile: any;
    options: Object = { 
                        url: URL,
                        authToken: localStorage.getItem('id_token')
                     };

    uploadStatus = null;                     
    constructor(private programSourceService: ProgramSourceService,
                private verificationCallService : VerificationCallService,
                private router: Router,
                private cd:ChangeDetectorRef)
    {}


    startUpload(){ this.uploadStatus = 'uploading';}

    handleUpload(data): void{
        if(data && data.response){
            console.log(JSON.stringify(data));
            if(data.status === 201){
                this.uploadStatus = "ok";
                data=JSON.parse(data.response);
                this.uploadFile = data;
                this.files.push(new ProgramSource(data));
                this.cd.detectChanges();
            }else{
                this.uploadStatus = "error"
            }
            
        }
        
    }

    resetStatus(){ this.uploadStatus=null; }
    ngOnInit() {

        this.programSourceService.getProgramSources().then(files => {
            this.files = files;
            return Promise.all(files.map(file => {
                console.log(file.id);
                this.verificationCallService.getFileVerificationCallLast(file.id)
                    .then(call => {
                        if (call) {
                            console.log(call);
                            console.log(this.files);
                            this.fileCalls[call.programSourceId] = call;
                        }

                        else {
                            console.log('ovaj je null');
                            this.fileCalls[file.id] = null;
                        }
                    });
            }));
        }).then(results => this.initDone = true);
                
    }
    
    gotoFile(fileId: number){
        console.log(fileId);
        let link = ['File', { id: fileId }];
        this.router.navigate(link);
    }

    addNewCall(fileId: number){
        let link = ['File', {id: fileId}, 'NewVerificationCall'];
        this.router.navigate(link);
    }

    deleteProgram(file: ProgramSource){
        return this.programSourceService
                .delete(file.id)
                .then(result => console.log(JSON.stringify(result)))
                .then(resp => {
                    this.files.splice(this.files.indexOf(file), 1)
                });
    }
}
