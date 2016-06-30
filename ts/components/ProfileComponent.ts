import {Component, ReflectiveInjector} from '@angular/core';
import { CanActivate} from '@angular/router-deprecated';
import {UserService} from '../services/user.service';
import {HTTP_PROVIDERS} from '@angular/http';


@Component({
	selector: 'profile',
	template:
	`
	<h2> Profile </h2>
	
	`
})
export class ProfileComponent {
}