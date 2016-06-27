import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {UserService} from "../services/user.service";
import {LoginShareService} from "../services/login-share.service";

@Component({
	selector: 'home',
	templateUrl: 'templates/home.component.html'
})
export class HomeComponent {
	constructor(private router: Router,
				private userService: UserService,
				private loginShareService: LoginShareService)
	{}

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