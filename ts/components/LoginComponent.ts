import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'templates/login.component.html'
})
export class LoginComponent{
    message: string = "loading";
    id: number;
    done: boolean = false;

    constructor(public userService: UserService, private router: Router) {
        this.message = '';
    }

    login(email: string, password: string){
        this.message = '';
        /*
        if(this.userService.login(email, password) === null){
            this.message = 'Incorect credentials';
            setTimeout(function(){
                this.message = '';
            }.bind(this), 2500);
        }
        return false;*/
        this.userService.login(email, password).then(id => this.id = id).then(result => { this.done = true });

    }

    logout(): boolean {
        this.userService.logout();
        this.router.navigate(['Home']);
        return false;
    }
}
