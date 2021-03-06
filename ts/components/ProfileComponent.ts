import {Component, ReflectiveInjector, OnInit} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

import {UserService} from '../services/user.service';
import {User} from '../classes/user';

@Component({
	selector: 'profile',
	providers: [HTTP_PROVIDERS],
	templateUrl: "templates/profile.component.html"
})
export class ProfileComponent implements OnInit{
	user  : any = {};
	done : boolean = false;
	edit : boolean = false;

	constructor(private http : Http, private userService: UserService, private router: Router){

	}

    ngOnInit() {
    	console.log('USER ID' + localStorage.getItem('user_id'));
		this.userService.getUser(localStorage.getItem('user_id'))
			.then( user => { this.user = user; this.done= true; console.log(user);})
			.catch( error => {
					console.log(error);
			});
	}

	submit() {
		this.router.navigate(['EditProfile']);
	}
}