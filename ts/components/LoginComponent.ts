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
        console.log(username, password);
        let client_id = '1_4lct27q50a2o0kkgokcc80080soo0w0884o84k4c4084080scc';
        let client_secret='18qczyqg7ccgw44ocw4488k08oscw0ogww08o8wg00wc8w48c4';
        let body= "grant_type=password" +
                  "&username=" + username +
                  "&password=" + password +
                  "&client_id=" + client_id +
                  "&client_secret=" + client_secret;

        console.log("napravilo body");
        console.log(body);
        console.log(encodeURIComponent(body));
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://localhost:8000/oauth/v2/token', body , {headers: headers})
        .subscribe(response => {
                    console.log("uslo u reponse");
                    localStorage.setItem('id_token', response.json().access_token);
                    localStorage.setItem('refresh_token', response.json().refresh_token);
                    localStorage.setItem('username', username);
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
    logout(): boolean {
        this.userService.logout();
        this.logged = false;
        this.router.navigate(['/Home']);
        return false;
    }
}
