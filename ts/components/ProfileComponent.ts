import {Component, ReflectiveInjector} from '@angular/core';
import { CanActivate} from '@angular/router-deprecated';
import {AuthService} from '../services/auth.service';


@Component({
	selector: 'profile',
	template:
	`
	<h2> Profile </h2>
	
	`
})
@CanActivate(
	(nextInstr: any, currInstr: any) => {
		let injector: any = ReflectiveInjector.resolveAndCreate([AuthService]);
		let authService: AuthService = injector.get(AuthService);
		return authService.isLogged();
})
export class ProfileComponent {
}