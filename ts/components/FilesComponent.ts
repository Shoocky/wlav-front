import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';

//services
import {UserService} 		 from '../services/user.service';
import {VerificationCallService} from '../services/verification-call.service';
import {ProgramSourceService}	  from '../services/program-source.service'; 


@Component({
	selector: 'files',
	directives: [RouterOutlet],
	providers: [
		UserService,
		VerificationCallService,
		ProgramSourceService
	],
	template:
	`
	<div>
	<h2> Files </h2>
	 <router-outlet></router-outlet>
    </div>
	`
})
@RouteConfig([
	{path: '/results',   name:'Results', component: ResultsComponent, useAsDefault: true},
	{path: '/:id/...',       name:'File',    component: FileComponent}
])
export class FilesComponent{

}