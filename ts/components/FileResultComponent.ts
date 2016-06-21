import {Component, OnInit} from '@angular/core';
import {RouterShareService} from '../services/router-share.service';
import {RouteParams, RouteRegistry, Router} from '@angular/router-deprecated';
import {VerificationCall} from '../classes/verification-call';
import {VerificationCallService} from '../services/verification-call.service';
import {DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';
import {ProgramSource} from '../classes/program-source';
import {ProgramSourceService} from '../services/program-source.service';

@Component({
	selector: 'file-result',
	directives: [DIRECTIVES],
	templateUrl: 'templates/file-result.component.html'

})
export class FileResultComponent implements OnInit{
	calls: VerificationCall[];

	constructor(private router: Router,
				private routerShareService: RouterShareService,
				private verificationCallService: VerificationCallService,
				private programSourceService : ProgramSourceService
	           )
	{}

	ngOnInit() {
		let id = this.routerShareService.getId();
		this.verificationCallService.getFileVerificationCalls(id)
			.then(calls => this.calls = calls);
	}
}