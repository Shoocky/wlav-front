import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
	selector: 'home',
	template:
	`
	<div class="homeLogin">
    	<div class="ui large buttons">
  			<button class="ui teal button" (click)="login()">Sign in</button>
  			<div class="or"></div>
  			<button class="ui teal button active" (click)="register()">Sign up</button>
		</div>
	</div>
	`
})
export class HomeComponent {
	constructor(private router: Router){

	}

	login() : void{
		let link = ['Login'];
		this.router.navigate(link);
	}
	register(): void{
		console.log("Registration");
	}
}