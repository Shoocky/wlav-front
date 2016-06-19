import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ProgramSourceService} from '../services/program-source.service';
import {ProgramSource} from '../classes/program-source';
import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';

@Component({
    selector: 'files',
    template:
        `
	<div>
	<ul>
		<li *ngFor="let file of files"> {{file.name}}</li>
	</ul>
    </div>
	`
})
export class FilesListComponent implements OnInit {
    public files : ProgramSource[];
    public verificationCalls : VerificationCall[];

    constructor(private programSourceService: ProgramSourceService,
                private verificationCallService : VerificationCallService)
    {}

    ngOnInit() {
        this.programSourceService.getProgramSources().then(files => this.files = files);
    }
}
