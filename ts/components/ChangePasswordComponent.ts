import {Component, ReflectiveInjector, OnInit} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

@Component({
	selector: 'profile',
	providers: [HTTP_PROVIDERS],
	templateUrl: "templates/change-password.component.html"
})
export class ChangePasswordComponent  {


	constructor(private router: Router){

	}


	changePassword(oldPassword: string, newPassword:string, repeatedPassword: string){
		console.log(oldPassword, newPassword, repeatedPassword);
		this.router.navigate(['Profile']);
	}
}