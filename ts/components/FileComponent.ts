import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';

import {SourceFileComponent} from './SourceFileComponent';
import {FileResultComponent} from './FileResultComponent';

@Component({
	selector: 'file',
	directives: [RouterOutlet],
	template:
	`
	<h3> File number {{ id }} </h3>
    <router-outlet></router-outlet>

	`
})
@RouteConfig([
	{path: '/source',   name:'SourceFile', component: SourceFileComponent, useAsDefault: true},
	{path: '/results',  name:'FileResult', component: FileResultComponent}
])
export class FileComponent implements OnInit{
	id: number;
	constructor(private routeParams: RouteParams){}

	ngOnInit(){
		this.id = +this.routeParams.get('id');
	}
}