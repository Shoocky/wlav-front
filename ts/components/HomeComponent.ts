import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {UserService} from "../services/user.service";
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Http} from '@angular/http';

@Component({
	selector: 'home',
	providers: [AUTH_PROVIDERS],
	templateUrl: 'templates/home.component.html'
})
export class HomeComponent {
	jwt: string;
	decodedJwt: string;
	constructor(private router: Router,
				private userService: UserService,
				private http: Http)
	{
		this.jwt = localStorage.getItem('id_token');
		//this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
	}

	login() : void{
		let link = ['Login'];
		this.router.navigate(link);
	}

	register(): void{
		let link = ['Register'];
		this.router.navigate(link);
	}

	isLoggedIn(){
		return this.userService.isLoggedIn();
	}

	getUserName(){
		return localStorage.getItem('username');
	}

}