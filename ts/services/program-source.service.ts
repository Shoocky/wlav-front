import { HTTP_PROVIDERS, Headers, Http } from '@angular/http';
import { XHRBackend } from '@angular/http';

import { Injectable } from '@angular/core';
import { ProgramSource }		  from '../classes/program-source';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProgramSourceService {
	private programSourceUrl = 'app/program_source';

	constructor(private http: Http) {

	}

	getProgramSources(): Promise<ProgramSource[]> {
		return this.http.get(this.programSourceUrl)
			.toPromise()
			.then(response => {
				return response.json().data;
			})
			.catch(this.handleError);
	}


	getProgramSource(id: number) {
		return this.getProgramSources()
			.then( programSources => programSources.filter( programSource => programSource.id === id)[0]);
	}

	// TODO: getProgramSourceForUser

	private post(programSource: ProgramSource): Promise<ProgramSource> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.programSourceUrl, JSON.stringify(programSource), { headers: headers })
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	private put(programSource: ProgramSource) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.programSourceUrl}/${programSource.id}`;

		return this.http
			.put(url, JSON.stringify(programSource), { headers: headers })
			.toPromise()
			.then(() => programSource)
			.catch(this.handleError);
	}

	delete(programSource: ProgramSource) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.programSourceUrl}/${programSource.id}`;

		return this.http
			.delete(url, { headers: headers })
			.toPromise()
			.catch(this.handleError);
	}

	save(programSource: ProgramSource) {
		if (programSource.id) {
			return this.put(programSource);
		}
		else {
			return this.post(programSource);
		}
	}

	private handleError(error: any) {
		console.error('An error ocurred', error);
		return Promise.reject(error.message || error);
	}
}