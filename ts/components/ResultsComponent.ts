import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';
import {ProgramSource} from '../classes/program-source';
import {ProgramSourceService} from '../services/program-source.service';
import {DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';

@Component({
	selector: 'results',
	directives: [DIRECTIVES],
	templateUrl: 'templates/results.component.html'
})
export class ResultsComponent implements OnInit{
	calls: VerificationCall[];
	callFile: ProgramSource[] = [];
	initDone = false;

	constructor(private verificationCallService: VerificationCallService,
				private programSourceService: ProgramSourceService)
	{
	}

	getProgramSource(id: number): ProgramSource
	{
		return this.callFile[id];
	}
	ngOnInit() {
		this.verificationCallService.getVerificationCalls()
			.then(calls => {
				this.calls = calls;
				return Promise.all(calls.map(call => {
					console.log(call.id);
					return this.programSourceService
						.getProgramSource(call.programSourceId)
						.then(program => {
							console.log(call.id);
							this.callFile[call.id] = program;
							console.log(this.callFile);
						});
					
				}));
			}).then(results => { this.initDone = true; console.log('lalalal' + this.callFile.length);});

	}
	deleteCall(call: VerificationCall){
		this.verificationCallService.delete(call).then(result => console.log(result));
	}
}