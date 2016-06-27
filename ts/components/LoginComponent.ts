import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router} from '@angular/router-deprecated';

import {LoginShareService} from '../services/login-share.service';

@Component({
    selector: 'login',
    templateUrl: 'templates/login.component.html'
})
export class LoginComponent{
    message: string = "loading";
    id: number;
    logged : boolean = false;

    constructor(public userService: UserService, private router: Router,
                private loginShareService: LoginShareService) {
        this.message = '';
    }

    login(email: string, password: string) {
        this.message = '';
        console.log("login()");
        this.logged = true;
        this.userService.login(email, password);
        this.router.navigate(['/Home']);

    }

    getUserName(){
        return localStorage.getItem('username');
    }
    logout(): boolean {
        this.userService.logout();
        this.logged = false;
        this.router.navigate(['/Home']);
        return false;
    }
}
