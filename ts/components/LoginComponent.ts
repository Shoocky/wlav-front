import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'templates/login.component.html'
})
export class LoginComponent{
    message: string;

    constructor(public authService: AuthService, private router: Router) {
        this.message = '';
    }

    login(username: string, password: string){
        this.message = '';
        if(!this.authService.login(username, password)){
            this.message = 'Incorect credentials';
            //tslint: disable
            setTimeout(function(){
                this.message = '';
            }.bind(this), 2500);
            //tslint enable
        }
        return false;
    }

    logout(): boolean {
        this.authService.logout();
        this.router.navigate(['Home']);
        return false;
    }
}