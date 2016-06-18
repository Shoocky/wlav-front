import {Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
@Component({
	selector: 'home',
	template:
	`
	<h2> Details </h2>
	
	<div>
		details for {{ id }}
	</div>
	`
})
export class DetailsComponent implements OnInit{
	id: number;

	constructor(private routeParams: RouteParams){}

	ngOnInit(){
		this.id = +this.routeParams.get('id');
	}
}