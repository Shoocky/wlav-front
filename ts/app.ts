//angular
import {Component, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteConfig, RouteParams} from '@angular/router-deprecated';

//services
import {USER_PROVIDERS} from './services/user.service';
import {UserService} from './services/user.service';

//componens
import { HomeComponent }    from './components/HomeComponent';
import { AboutComponent }   from './components/AboutComponent';
import { DetailsComponent } from './components/DetailsComponent';
import { ProfileComponent } from './components/ProfileComponent';
import { EditProfileComponent } from './components/EditProfileComponent';
import { FilesComponent } from './components/FilesComponent';
import { LoginComponent } from './components/LoginComponent';
import { RegistrationComponent } from './components/RegistrationComponent';
import { ChangePasswordComponent } from './components/ChangePasswordComponent';


//directives
import { LoggedInRouterOutlet } from './directives/logged-in-router-outlet.directive';

@Component({
	selector: 'wlav-app',
	directives: [ROUTER_DIRECTIVES, LoginComponent, LoggedInRouterOutlet],
	providers: [ROUTER_PROVIDERS, UserService],
	templateUrl: 'templates/app.component.html'
})
@RouteConfig([
	{path: '/home',           name:'Home',           component: HomeComponent, useAsDefault: true},
	{path: '/about',          name:'About',          component: AboutComponent},
	{path: '/profile',        name:'Profile',        component: ProfileComponent},
	{path: '/editprofile',    name:'EditProfile',    component: EditProfileComponent},
	{path: '/login',          name:'Login',          component: LoginComponent},
	{path: '/register',       name:'Register',       component: RegistrationComponent},
	{path: '/files/...',      name:'Files',          component: FilesComponent},
	{path: '/details/:id',    name:'Details',        component: DetailsComponent},
	{path: '/changepassword', name:'ChangePassword', component: ChangePasswordComponent},

])
export class WlavApp {
	constructor(private router: Router,
				private userService: UserService)
	{}

	isLoggedIn(){
		return this.userService.isLoggedIn();
	}

	logout(): boolean {
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
	ROUTER_PROVIDERS
]);