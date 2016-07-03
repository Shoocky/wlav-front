import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { VerificationCall }		  from '../classes/verification-call';
import 'rxjs/add/operator/toPromise';
import {contentHeaders} from '../common/headers';

@Injectable()
export class VerificationCallService {
	private baseUrl = 'http://localhost:8000/api/user';

	constructor(private http: Http) {

	}

	getAllUsersVerificationCalls() :Promise<VerificationCall[]>{
		let headers = contentHeaders();
		return this.http.get('http://localhost:8000/api/verificationcall', {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}
	
	getVerificationCalls(): Promise<VerificationCall[]> {
		let headers = contentHeaders();
		return this.http.get(this.baseUrl + '/' + localStorage.getItem('user_id') + '/verificationcall', {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	getFileVerificationCalls(fileId: number): Promise<VerificationCall[]> {
		let headers = contentHeaders();
		return this.http.get(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' + fileId + '/verificationcall', {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	getFileVerificationCallLast(fileId: number): Promise<VerificationCall>{
		return this.getFileVerificationCalls(fileId).then(
			verificationCalls => {
				if (verificationCalls.length != 0) {
					return verificationCalls.reduce(
						(prev, curr) => (prev.id > curr.id) ? prev : curr
					);
				}
			}
		);	
	}

	getVerificationCall(id: number) {
		return this.getVerificationCalls()
			.then( verificationCalls =>
				   verificationCalls.filter(verificationCall => verificationCall.id === id)[0]
				   );
	}

	post(flags: Object, file_id: number) : any {
		let headers = contentHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		let body = "flags=" + JSON.stringify(flags);

		return this.http
			.post(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' 
			+ file_id + '/verificationcall', body, {headers: headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}


	delete(verificationCall: VerificationCall) {
		let headers = contentHeaders();
		return this.http.delete(this.baseUrl + '/' + localStorage.getItem('user_id') + '/programsource/' + verificationCall.programSourceId + '/verificationcall/' + verificationCall.id, {headers: headers})
			.toPromise()
			.then(response => { return response.json();})
			.catch( error => {
				console.log(error);
			});
	}

	save(verificationCall: VerificationCall) {/*
		if (verificationCall.id) {
			return this.put(verificationCall);
		}
		else {
			return this.post(verificationCall);
		}*/
	}

	private handleError(error: any) {
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
	
}