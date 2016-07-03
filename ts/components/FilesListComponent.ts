import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ProgramSourceService} from '../services/program-source.service';
import {ProgramSource} from '../classes/program-source';
import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';
import { Router }                      from '@angular/router-deprecated';


@Component({
    selector: 'files',
    templateUrl: 'templates/files-list.component.html'
})
export class FilesListComponent implements OnInit {
    files : ProgramSource[];
    filesTmp: Array<ProgramSource>;
    verificationCalls : VerificationCall[];
    fileCalls: Array<VerificationCall> = new Array<VerificationCall>();
    initDone = false;

    constructor(private programSourceService: ProgramSourceService,
                private verificationCallService : VerificationCallService,
                private router: Router)
    {}

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
}
