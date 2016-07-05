import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'login',
    directives : [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    templateUrl: 'templates/login.component.html'
})
export class LoginComponent{
    message: string = "loading";
    id: number;
    logged : boolean = false;

    constructor(public userService: UserService,
                private router: Router,
                private http: Http) {
        this.message = '';
    }

    login(username: string, password: string) {

        let client_id = '1_4lct27q50a2o0kkgokcc80080soo0w0884o84k4c4084080scc';
        let client_secret='18qczyqg7ccgw44ocw4488k08oscw0ogww08o8wg00wc8w48c4';
        let body= "grant_type=password" +
                  "&username=" + username +
                  "&password=" + password +
                  "&client_id=" + client_id +
                  "&client_secret=" + client_secret;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://localhost:8000/oauth/v2/token', body , {headers: headers})
        .subscribe(response => {
                    this.logged = true; 
                    //cuvanje tokena i informacija o koriscnicima 
                    localStorage.setItem('id_token', response.json().access_token);
                    localStorage.setItem('refresh_token', response.json().refresh_token);
                    localStorage.setItem('user_id', response.json().user.id);
                    localStorage.setItem('username', username);
                    
                    console.log('LOGIN USER ID' +localStorage.getItem('user_id'));
                    //postavljanje vremena isteka tokenu
                    var d = new Date(Date.now());
                    d.setSeconds(d.getSeconds() + response.json().expires_in);
                    localStorage.setItem('expires_at', d.toString());
                    
                    this.router.navigate(['/Home']);

                  },
                   error => {
                       alert(error.text());
                       console.log(error.text());
                   }
        );
    }

    getUserName(){
        return localStorage.getItem('username');
    }

    goRegister(){
        this.router.navigate(['/Register']);
    }

    isLogged(){
        console.log('wtf');
        return this.userService.isLogged();
    }

    logout(): boolean {
        this.userService.logout();
        this.logged = false;
        this.router.navigate(['/Home']);
        return false;
    }
}
