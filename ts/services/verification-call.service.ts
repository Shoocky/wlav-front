import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { VerificationCall }		  from '../classes/verification-call';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerfificationCallService {
	private verificationCallUrl = 'app/verification_call';

	constructor(private http: Http) {

	}

	getVerificationCalls(): Promise<VerificationCall[]> {
		return this.http.get(this.verificationCallUrl)
			.toPromise()
			.then(response => response.json().data)
			.catch(this.handleError);
	}


	getVerificationCall(id: number) {
		return this.getVerificationCalls()
			.then( verificationCalls => verificationCalls.filter(verificationCall => verificationCall.id === id)[0]);
	}

	private post(verificationCall: VerificationCall): Promise<VerificationCall> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.verificationCallUrl, JSON.stringify(verificationCall), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	private put(verificationCall: VerificationCall) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.verificationCallUrl}/${verificationCall.id}`;

		return this.http
			.put(url, JSON.stringify(verificationCall), { headers: headers })
			.toPromise()
			.then(() => verificationCall)
			.catch(this.handleError);
	}

	delete(verificationCall: VerificationCall) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.verificationCallUrl}/${verificationCall.id}`;

		return this.http
			.delete(url, { headers: headers })
			.toPromise()
			.catch(this.handleError);
	}

	save(verificationCall: VerificationCall) {
		if (verificationCall.id) {
			return this.put(verificationCall);
		}
		else {
			return this.post(verificationCall);
		}
	}

	private handleError(error: any) {
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}