import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';
import {FileComponent} from './FileComponent';
import {ResultsComponent} from './ResultsComponent';

@Component({
	selector: 'files',
	directives: [RouterOutlet],
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
export class FilesComponent {
}