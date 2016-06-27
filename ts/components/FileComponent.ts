//angular
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';

//classes
import {ProgramSource} from '../classes/program-source';

//components
import {SourceFileComponent} from './SourceFileComponent';
import {FileResultComponent} from './FileResultComponent';
import {NewVerificationCallComponent} from './NewVerificationCallComponent';

//services
import {RouterShareService} from '../services/router-share.service';
import {ProgramSourceService} from '../services/program-source.service';

@Component({
	selector: 'file',
	directives: [RouterOutlet],
	providers: [RouterShareService],
	templateUrl: 'templates/file.component.html'
})
@RouteConfig([
	{path: '/source',   name:'SourceFile', component: SourceFileComponent, useAsDefault: true},
	{path: '/results',  name:'FileResult', component: FileResultComponent},
	{path: '/new', name: 'NewVerificationCall', component: NewVerificationCallComponent}
])
export class FileComponent implements OnInit{
	id: number;
	programSource: ProgramSource;
	done: boolean = false;
	constructor(private routeParams: RouteParams,
				private routerShareService: RouterShareService,
				private programSourceService: ProgramSourceService,
				private router: Router)
	{}

	ngOnInit(){
		this.id = +this.routeParams.get('id');
		this.routerShareService.setId(this.id);
		this.programSourceService.getProgramSource(this.id)
			.then((source) => {
				console.log(source);
				this.programSource = source;
			});

	}

	gotoSource(fileId: number){
		let link = ['File', {id: fileId}, 'SourceFile'];
		this.router.navigate(link);
	}

	gotoResults(fileId: number){
		let link = ['File', {id: fileId}, 'FileResult'];
		this.router.navigate(link);
	}
	gotoNewVerification(fileId: number){
		let link = ['File', {id: fileId}, 'NewVerificationCall'];
		this.router.navigate(link);
	}
}