import {Component, ReflectiveInjector, OnInit} from '@angular/core';
import {CanActivate} from '@angular/router-deprecated';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
	selector: 'profile',
	providers: [HTTP_PROVIDERS],
	templateUrl: "templates/profile.component.html"
})
export class ProfileComponent implements OnInit{
	user  : any;
	done : boolean = false;
	edit : boolean = false;

	constructor(private http : Http){

	}

    ngOnInit() {
		let headers = new Headers();
		console.log('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
		headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
		this.http.get('http://localhost:8000/api/user/' + localStorage.getItem('user_id'), {headers: headers})
			.toPromise()
			.then(response => {
				return response.json();
			})
			.then( user => { this.user = user; console.log(user); this.done= true;})
			.catch( error => {
					console.log(error);
			});
	}

	editProfile() {
		this.edit = true;
	}

	submit(firstName: string, lastName: string, email: string, username: string) {
		let headers = new Headers();
		console.log('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
		headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
		headers.append('Content-Type', 'app/x-www-form-urlencoded');
		headers.append('Accept', 'app/json');
		let body = "firsName=" + firstName +
			       "&lastName=" + lastName +
			       "&email=" + email +
				   "&username=" + username;
		this.http.put('http://localhost:8000/api/user/' + localStorage.getItem('user_id'), body, {headers: headers})
			.subscribe(	result => {
							console.log("Account successfully changed!");
						},
						error => {
						console.log(error);
						}
					  );
	}
}