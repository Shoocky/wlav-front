import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';
import {FilesListComponent} from './FilesListComponent';

//services
import {UserService} 		 from '../services/user.service';
import {VerificationCallService} from '../services/verification-call.service';
import {ProgramSourceService}	  from '../services/program-source.service'; 


@Component({
	selector: 'files',
	directives: [RouterOutlet, ROUTER_DIRECTIVES],
	providers: [
		UserService,
		VerificationCallService,
		ProgramSourceService
	],
	templateUrl: 'templates/files.component.html'

})
@RouteConfig([
	{path: '/',   name:'FilesList', component: FilesListComponent, useAsDefault: true},
	{path: '/results',   name:'Results', component: ResultsComponent},
	{path: '/:id/...',       name:'File',    component: FileComponent}
])
export class FilesComponent{
	constructor(private router: Router) { }

}