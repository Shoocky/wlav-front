import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { User}		  from '../classes/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
	private userUrl = 'app/user';

	constructor(private http: Http){

	}

	getUsers(): Promise<User[]> {
	   return this.http.get(this.userUrl)
	              .toPromise()
	              .then(response => response.json().data)
	              .catch(this.handleError);
	 }


	getUser(id: number){
		return this.getUsers()
				.then(users => users.filter(users => users.id === id)[0]);
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

	private handleError(error: any){
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}