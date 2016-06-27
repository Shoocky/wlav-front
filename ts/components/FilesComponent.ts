import {Component, ReflectiveInjector} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet, CanActivate} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';
import {FilesListComponent} from './FilesListComponent';
import {HTTP_PROVIDERS} from '@angular/http';

//services
import {UserService} 		 from '../services/user.service';
import {VerificationCallService} from '../services/verification-call.service';
import {ProgramSourceService}	  from '../services/program-source.service';

@Component({
	selector: 'files',
	directives: [RouterOutlet, ROUTER_DIRECTIVES],
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
@CanActivate(
	(nextInstr: any, currInstr: any) => {
	let injector: any = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS, UserService]);
	let userService: UserService = injector.get(UserService);
	return userService.isLogged();
}
)
export class FilesComponent{
	constructor(private router: Router) { }

}