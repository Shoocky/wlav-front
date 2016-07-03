import {Component, ReflectiveInjector, ChangeDetectorRef, NgZone} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet, CanActivate} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';
import {FilesListComponent} from './FilesListComponent';
import {HTTP_PROVIDERS} from '@angular/http';

//services
import {UserService} 		 from '../services/user.service';
import {VerificationCallService} from '../services/verification-call.service';
import {ProgramSourceService}	  from '../services/program-source.service';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';


const URL = 'http://127.0.0.1:8000/apiuser/' + localStorage.getItem('user_id') +  '/programsource';

@Component({
	selector: 'files',
	directives: [RouterOutlet, ROUTER_DIRECTIVES,
				 SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS,
				 UPLOAD_DIRECTIVES],
	providers: [
		VerificationCallService,
		ProgramSourceService,
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