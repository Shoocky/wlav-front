import {Component, OnInit} from '@angular/core';
import {ProgramSource } from '../classes/program-source';
import {ProgramSourceService} from '../services/program-source.service';
import {VerificationCallService} from '../services/verification-call.service';
import {UserService}    from '../services/user.service';
import {Router} from '@angular/router-deprecated';

@Component({
	selector: 'source-file',
	template:
	`
	<h4> Source file... </h4>
	
	`
})
export class SourceFileComponent implements OnInit {
	programSource: ProgramSource;

	constructor(private programSourceService: ProgramSourceService,
				private verificationCallService: VerificationCallService,
				private userService: UserService){}

	ngOnInit(){
		this.programSourceService.getProgramSource(1).then(source => console.log(source.name));
		this.verificationCallService.getVerificationCall(1)
			.then(verification => console.log(verification.stdoutMsg));
		this.userService.getUser(1)
			.then(user => console.log(user.firstName));
	}
	
}