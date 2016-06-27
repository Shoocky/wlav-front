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
import {USER_PROVIDERS} from './services/user.service';
import {UserService} from './services/user.service';
import {LoginShareService} from './services/login-share.service';



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
import {RegistrationComponent} from './components/RegistrationComponent';

@Component({
	selector: 'wlav-app',
	directives: [ROUTER_DIRECTIVES, LoginComponent],
	providers: [ROUTER_PROVIDERS, UserService, LoginShareService],
	templateUrl: 'templates/app.component.html'
})
@RouteConfig([
	{path: '/home',        name:'Home',          component: HomeComponent, useAsDefault: true},
	{path: '/about',       name:'About',         component: AboutComponent},
	{path: '/profile',     name:'Profile',       component: ProfileComponent},
	{path: '/login',       name:'Login',         component: LoginComponent},
	{path: '/register',    name:'Register',      component: RegistrationComponent},
	{path: '/files/...',   name:'Files',         component: FilesComponent},
	{path: '/mrs',         name:'Mrs',           component: Mrs },
	{path: '/details/:id', name:'Details',       component: DetailsComponent},
	{path: '/heroes/...',  name:'HeroesRouter',  component: HeroesRoutingComponent}

])
export class WlavApp {
	constructor(private router: Router,
				private userService: UserService,
				private loginShareService: LoginShareService)
	{}

	isLoggedIn(){
		return this.userService.isLoggedIn();
	}

	logout(): boolean {
		console.log("logout");
		this.userService.logout();
		this.router.navigate(['Home']);
		return false;
	}

	getUserName(){
		return localStorage.getItem('username');
	}
}

bootstrap(WlavApp, [
	HTTP_PROVIDERS,
	UserService,
	ROUTER_PROVIDERS,
	{provide: XHRBackend, useClass: InMemoryBackendService },
	{provide: SEED_DATA, useClass:  DataService}
]);