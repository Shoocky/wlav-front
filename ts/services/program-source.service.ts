import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { ProgramSource }		  from '../classes/program-source';
import 'rxjs/add/operator/toPromise';
import {contentHeaders} from '../common/headers';

@Injectable()
export class ProgramSourceService {
	private baseUrl = 'http://localhost:8000/apiuser'

	constructor(private http: Http) {

	}

	getAllUsersProgramSources(): Promise<ProgramSource[]> {
		let headers = contentHeaders();
		return this.http.get('http://localhost:8000/api/programsource', {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	getProgramSources(): Promise<ProgramSource[]> {
		let headers = contentHeaders();
		return this.http.get(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource', {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}


	getProgramSource(id: number) : any {
		let headers = contentHeaders();
		return this.http.get(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' + id, {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	post(programSource: ProgramSource) {
		/*let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.programSourceUrl, JSON.stringify(programSource), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);*/
	}

	put(name: string, id: number) {
		let headers = contentHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		let body = 'name=' + name;

		return this.http.put('http://localhost:8000/api/user' + localStorage.getItem('user_id') + '/programsource/' + id, body, {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	delete(id: number) {
		let headers = contentHeaders();
		console.log(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' + id);
		console.log(JSON.stringify(headers));
		return this.http.delete(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' + id, {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	save(programSource: ProgramSource) {
		/*if (programSource.id) {
			return this.put(programSource);
		}
		else {
			return this.post(programSource);
		}*/
	}

	private handleError(error: any) {
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}