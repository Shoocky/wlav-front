import { XHRBackend} from '@angular/http';

//backend web-api
import { InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import { DataService }		from './services/data.service';

//angular
import {Component, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams} from '@angular/router-deprecated';

//services
import {AUTH_PROVIDERS} from './services/auth.service';
import {AuthService} from './services/auth.service';


//componens
import {Mrs} from './components/mrs';
import {HomeComponent}    from './components/HomeComponent';
import {AboutComponent}   from './components/AboutComponent';
import {DetailsComponent} from './components/DetailsComponent';
import {ProfileComponent} from './components/ProfileComponent';
import {FilesComponent} from './components/FilesComponent';
import {HeroesComponent} from './components/HeroesComponent';
import {HeroesRoutingComponent } from './components/HeroesRoutingComponent';
import {LoginComponent} from './components/LoginComponent';

@Component({
	selector: 'wlav-app',
	directives: [ROUTER_DIRECTIVES, LoginComponent],
	providers: [ROUTER_PROVIDERS],
	templateUrl: 'templates/app.component.html'
})
@RouteConfig([
	{path: '/home',        name:'Home',          component: HomeComponent, useAsDefault: true},
	{path: '/about',       name:'About',         component: AboutComponent},
	{path: '/profile',     name:'Profile',       component: ProfileComponent},
	{path: '/login',       name: 'Login',        component: LoginComponent},
	{path: '/files/...',   name:'Files',         component: FilesComponent},
	{path: '/mrs',         name:'Mrs',           component: Mrs },
	{path: '/details/:id', name:'Details',       component: DetailsComponent},
	{path: '/heroes/...',  name:'HeroesRouter',  component: HeroesRoutingComponent}

])
export class WlavApp {
	constructor(private router: Router, public authService: AuthService){}

	logout(): boolean {
		console.log("logout");
		this.authService.logout();
		this.router.navigate(['Home']);
		return false;
	}
}

bootstrap(WlavApp, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	AUTH_PROVIDERS,
	{provide: XHRBackend, useClass: InMemoryBackendService },
	{provide: SEED_DATA, useClass:  DataService}
]);