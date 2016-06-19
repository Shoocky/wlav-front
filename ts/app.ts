import { XHRBackend} from '@angular/http';

//backend web-api
import { InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import { DataService }		from './services/data.service';

//angular
import {Component, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams} from '@angular/router-deprecated';

//componens
import {Mrs} from './components/mrs';
import {HomeComponent}    from './components/HomeComponent';
import {AboutComponent}   from './components/AboutComponent';
import {DetailsComponent} from './components/DetailsComponent';
import {ProfileComponent} from './components/ProfileComponent';
import {FilesComponent} from './components/FilesComponent';
import {HeroesComponent} from './components/HeroesComponent';
import {HeroesRoutingComponent } from './components/HeroesRoutingComponent';


@Component({
	selector: 'wlav-app',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS],
	template:
	`
	<div>
		<nav>
		<a> Navigation </a>
		<ul>	
			<li> <a [routerLink]="['/Home']"> Home </a> </li>
			<li> <a [routerLink]="['/Files']"> Files </a> </li>
			<li> <a [routerLink]="['/About']"> About </a> </li>
			<li> <a [routerLink]="['/HeroesRouter']"> Heroes </a> </li>
		</ul>

		<ul>
			<li> <a [routerLink]="['/Profile']"> Profile </a> </li>
			<li> <button (click)="logout()"> Logout </button> </li>
		</ul>
	</nav>

		<router-outlet></router-outlet>
	</div>
	 
	`
})
@RouteConfig([
	{path: '/home',        name:'Home',          component: HomeComponent, useAsDefault: true},
	{path: '/about',       name:'About',         component: AboutComponent},
	{path: '/profile',     name:'Profile',       component: ProfileComponent},
	{path: '/files/...',   name:'Files',         component: FilesComponent},
	{path: '/mrs',         name:'Mrs',           component: Mrs },
	{path: '/details/:id', name:'Details',       component: DetailsComponent},
	{path: '/heroes/...',  name:'HeroesRouter',  component: HeroesRoutingComponent}

])
export class WlavApp {
	logout() {
		console.log("logout...");
	}
}

bootstrap(WlavApp, [
	HTTP_PROVIDERS,
	{provide: XHRBackend, useClass: InMemoryBackendService },
	{provide: SEED_DATA, useClass:  DataService}
]);