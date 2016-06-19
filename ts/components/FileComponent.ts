//angular
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';

//components
import {SourceFileComponent} from './SourceFileComponent';
import {FileResultComponent} from './FileResultComponent';

//services
import {RouterShareService} from '../services/router-share.service';


@Component({
	selector: 'file',
	directives: [RouterOutlet],
	providers: [RouterShareService]
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
	constructor(private routeParams: RouteParams,
				private routerShareService: RouterShareService){}

	ngOnInit(){
		this.id = +this.routeParams.get('id');
		this.routerShareService.setId(this.id);
	}
}