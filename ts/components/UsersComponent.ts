import {Component, ReflectiveInjector, OnInit} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

import {UserService} from '../services/user.service';
import {User} from '../classes/user';

@Component({
	selector: 'profile',
	providers: [HTTP_PROVIDERS],
	templateUrl: "templates/users.component.html"
})
export class UsersComponent implements OnInit{
	users  : Array<User>;
	done : boolean = false;

	constructor(private http : Http, private userService: UserService, private router: Router){

	}

    ngOnInit() {
		this.userService.getUsers()
			.then( users => { this.users = users; this.done= true;})
			.catch( error => {
					console.log(error);
			});
	}

}