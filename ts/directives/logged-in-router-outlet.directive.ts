import { ViewContainerRef, DynamicComponentLoader, AttributeMetadata, Directive, Attribute } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router-deprecated';

import { UserService } from '../services/user.service';

@Directive({
	selector: 'login-router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet{
	publicRoutes;
	private parentRouter: Router;
	private router: Router;

	constructor(viewContainerRef: ViewContainerRef,
				loader: DynamicComponentLoader,
				_parentRouter: Router, @Attribute('name') nameAttr: string,
				private userService: UserService){
		
		super(viewContainerRef, loader, _parentRouter, nameAttr);
		this.router = _parentRouter;
		this.publicRoutes = ['', 'login', 'signup'];
	}

	activate(instruction: ComponentInstruction){
		if(this._canActivate(instruction.urlPath)){
			return super.activate(instruction);
		}

		this.router.navigate(['Login']);
	}

	_canActivate(url){
		return this.publicRoutes.indexOf(url) !== -1 || this.userService.isLogged();
	}
}
