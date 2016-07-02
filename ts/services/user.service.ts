import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { Injectable, Inject, provide } from '@angular/core';
import { User}		  from '../classes/user';
import 'rxjs/add/operator/toPromise';
import {contentHeaders} from '../common/headers';

@Injectable()
export class UserService{
	private userUrl = 'app/user';
	private baseUrl = 'http://localhost:8000/api/user'
	logged: boolean = false;
	constructor(private http: Http){

	}

	isLoggedIn(){
		return localStorage.getItem("username");
	}

	getUsers(): Promise<User[]> {
		let headers = contentHeaders;
		return this.http.get(this.baseUrl , {headers: contentHeaders})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	 }


	getUser(id: number) : Promise<User> {
		let headers = contentHeaders;
		console.log(localStorage.getItem('user_id'));
		return this.http.get(this.baseUrl + '/' + localStorage.getItem('user_id'), {headers: headers})
					.toPromise()
					.then(response => { console.log(response.json()); return response.json();})
					.catch( error => {
							console.log(error);
					});
	}

	post(user: User) : any{
		let headers = contentHeaders;
		headers.append('Content-Type', 'app/x-www-form-urlencoded');

		let body = 	"username=" + user.username+
					"&firstName=" + user.firstName +
					"&lastName=" + user.lastName;
		console.log(body);
		this.http.post(this.baseUrl + '/' + localStorage.getItem('user_id'), body, {headers: headers})
			.subscribe(	result => {
				console.log(result.json());
				return result.json();
			},
				error => {
				console.log(error);
			}
		);
	}

	put(user: User) : any {
		let headers = contentHeaders;
		headers.append('Content-Type', 'app/x-www-form-urlencoded');

		let body = 	"username=" + user.username+
					"&firstName=" + user.firstName +
					"&lastName=" + user.lastName;
					console.log(body);
		this.http.put(this.baseUrl + '/' + localStorage.getItem('user_id'), body, {headers: headers})
			.subscribe(	result => {
				console.log(result.json());
				return result.json();
			},
				error => {
				console.log(error);
			}
		);
	}

	delete(user: User): any{
		let headers = contentHeaders;
		this.http.delete(this.baseUrl + '/' + localStorage.getItem('user_id'), {headers: headers})
			.subscribe(	result => {
				console.log(result.json());
				return result.json();
			},
				error => {
				console.log(error);
			}
		);
	}

	save(firstName: string, lastName: string, email: string, username: string){
		/*if(user.id){
			return this.put(user);
		}
		else{
			return this.post(user);
		}*/
	}


	logout(): any {
		localStorage.removeItem('id_token');
		localStorage.removeItem('username');
		localStorage.removeItem('expires_at');
		localStorage.removeItem('user_id');

	}


	isLogged(): boolean {
		var expires_at = localStorage.getItem('expires_at');
		if (!expires_at) return false;
	
		var d = new Date(localStorage.getItem('expires_at'));
		if(new Date(Date.now()) > d){
			return false;
		}else{
			return true;
		}
	}

	getLastId()/*: number*/ {
/*
		let all_users;
		let id;
		this.getUsers().then(users => all_users = users).then(result => id = all_users[all_users.length -1].id);
		return id;*/
	}

	private handleError(error: any){
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}

export var USER_PROVIDERS: Array<any> = [
	provide(UserService, {useClass: UserService})
];

