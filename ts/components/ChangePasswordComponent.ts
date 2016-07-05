import {Component, ReflectiveInjector, OnInit} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
import {UserService} from '../services/user.service';

@Component({
	selector: 'profile',
	providers: [HTTP_PROVIDERS],
	templateUrl: "templates/change-password.component.html"
})
export class ChangePasswordComponent {
	passMatch : boolean  = false;

	constructor(private http : Http, private userService: UserService, private router: Router){

	}

	changePassword(oldPassword: string, newPassword:string, repeatedPassword: string){
		console.log(oldPassword, newPassword, repeatedPassword);
		if(newPassword !== repeatedPassword)
			this.passMatch = true;
		else {
			this.passMatch = false;
			this.userService.changePassword(newPassword, oldPassword);
			this.router.navigate(['Profile']);
		}
	}
}