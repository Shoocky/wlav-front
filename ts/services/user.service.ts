import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable, Inject, provide } from '@angular/core';
import { User}		  from '../classes/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
	private userUrl = 'app/user';
	logged: boolean = false;
	constructor(private http: Http){

	}

	isLoggedIn(){
		return localStorage.getItem("username");
	}
	getUsers(): Promise<User[]> {
		return this.http.get(this.userUrl)
			.toPromise()
			.then(response => {
				return response.json().data;
			})
			.catch(this.handleError);
	 }


	getUser(id: number) : Promise<User> {
		return this.getUsers()
					.then(users => {
						console.log("users" + users);
						var us=users.filter(user=> user.id == id);
						if(us.length == 0 )
							return null;
						else return us[0];
					});

	}

	private post(user: User): Promise<User>{
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.userUrl, JSON.stringify(user), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	private put(user: User){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.userUrl}/${user.id}`;

			return this.http
			.put(url, JSON.stringify(user), { headers: headers })
			.toPromise()
			.then(() => user)
			.catch(this.handleError);
	}

	delete(user: User){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.userUrl}/${user.id}`;

			return this.http
			.delete(url, { headers: headers })
			.toPromise()
			.catch(this.handleError);
	}

	save(user: User){
		if(user.id){
			return this.put(user);
		}
		else{
			return this.post(user);
		}
	}

	login(email: string, password: string) {

		//this.getUser(1).then(result => console.log("user:" + JSON.stringify(result)));
		return this.getUsers()
			.then(users => {
				var us=users.filter(user => user.email === email && user.password === password);
				if(us.length == 0 )
					return null;
				else {
					localStorage.setItem('id', JSON.stringify(us[0]['id']));
					localStorage.setItem('username', us[0]['username']);
					this.logged = true;
					return us[0];
				}
			});
	}

	logout(): any {
		localStorage.removeItem('id_token');
		localStorage.removeItem('username');
		localStorage.removeItem('expires_at');
	}

	getLoggedUsername(): Promise<string> {
		let id_logged:number;
		let username:string;
		id_logged = +localStorage.getItem('id');
		if(id_logged !== 0){
			return this.getUser(id_logged).then(user => user.username);
	    }else{
			return Promise.resolve(null);
		}
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

	getLastId(): number {

		let all_users;
		let id;
		this.getUsers().then(users => all_users = users).then(result => id = all_users[all_users.length -1].id);
		return id;
	}

	private handleError(error: any){
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}

export var USER_PROVIDERS: Array<any> = [
	provide(UserService, {useClass: UserService})
];

