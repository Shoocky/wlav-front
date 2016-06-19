//components
import {Component, OnInit, Injector} from '@angular/core';

//classes
import {ProgramSource } from '../classes/program-source';
import {VerificationCall} from '../classes/verification-call';

//services
import {ProgramSourceService} from '../services/program-source.service';
import {VerificationCallService} from '../services/verification-call.service';
import {UserService}    from '../services/user.service';
import {RouterShareService} from '../services/router-share.service';
import {RouteParams, RouteRegistry, Router} from '@angular/router-deprecated';

@Component({
	selector: 'source-file',
	templateUrl: 'templates/source-file.component.html'
	
})
export class SourceFileComponent implements OnInit {
	programSource: ProgramSource;
	lastVerificationCall: VerificationCall;
	
	constructor(private programSourceService: ProgramSourceService,
				private verificationCallService: VerificationCallService,
				private userService: UserService,
				private routerShareService: RouterShareService){
	}

	ngOnInit(){
		let id = this.routerShareService.getId();
		
		console.log(id);
		this.programSourceService.getProgramSource(id)
			.then((source) => {
				console.log(source);
				this.programSource = source;
			});

		this.verificationCallService.getFileVerificationCallLast(id)
			.then(call => this.lastVerificationCall = call);

	}
	
}