import {Injectable, Inject, provide} from '@angular/core';
import {User} from '../classes/user';

@Injectable()
export class AuthService {

    login(user: string, password: string): boolean {
        if(user === 'user' && password === 'password'){
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    }

    logout(): any {
        localStorage.removeItem('username');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    isLogged(): boolean {
        return true;
        //return this.getUser()!=null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [
    provide(AuthService, {useClass: AuthService})
];
