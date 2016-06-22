import {Component, ReflectiveInjector} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet, CanActivate} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';
import {FilesListComponent} from './FilesListComponent';

//services
import {UserService} 		 from '../services/user.service';
import {VerificationCallService} from '../services/verification-call.service';
import {ProgramSourceService}	  from '../services/program-source.service'; 
import {AuthService} from '../services/auth.service';

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
@CanActivate(
	(nextInstr: any, currInstr: any) => {
	let injector: any = ReflectiveInjector.resolveAndCreate([AuthService]);
	let authService: AuthService = injector.get(AuthService);
	return authService.isLogged();
}
)
export class FilesComponent{
	constructor(private router: Router) { }

}