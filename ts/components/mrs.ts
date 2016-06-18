import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Http, Response, RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import {Observable}  from 'rxjs/Observable';

@Component({
	selector: 'mrs',
	template:
	`
	<h2> mrs </h2>
	<div>
		<button (click)="makeHeaders()"> Make GET </button>
		<div *ngIf="loading">loading...</div>
		<div *ngIf="errorGet"> error with get </div>
		<pre> {{ data | json }} </pre>

	</div>
	<div>
		<button (click)="makePostRequest()"> Make POST </button>
		<div *ngIf="sending"> sending </div>
		<div *ngIf="errorPost"> error with POST {{errData}} </div>
		<pre> {{postResponse | json }} </pre>
	</div>
	`
})
export class Mrs{
	data: Object;
	loading: boolean;
	sending: boolean;
	errorGet: boolean;
	errorPost: boolean;
	errData: string = "";

	constructor(public http: Http) { 
	}

	makeGetRequest(){
		this.loading = true;
		this.errData = "";
		this.errorGet = false;

		this.http.request('http://jsonplaceholder.typicode.com/posts/1')
				  .subscribe(
				  	(res: Response) => {
							console.log("pa kreno si care");
					  		this.data = res.json();
							this.loading = false;
							this.errorGet = false;

				      },
				    (err: Error) => { 
				    	console.log('lalalla');
						this.errData.toString();
						this.errorGet = true;
						this.loading = false;
				    	}
				  );

	}

    
	makeHeaders(): void {

		let headers: Headers = new Headers();

		headers.append('X-API-TOKEN', 'ng-book');
		let opts: RequestOptions = new RequestOptions();

		opts.headers = headers;
				this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
			.subscribe((res: Response) => {
				this.data = res.json();
			});
	}
	/*
	makeHeaders(): void {
    	let headers: Headers = new Headers();
    	headers.append("X-API-TOKEN", "ng-book");
	   	let opts: RequestOptions = new RequestOptions();
		  opts.headers = headers;
			  this.http.get("http://jsonplaceholder.typicode.com/posts/1", opts)
		      .subscribe((res: Response) => {
			     this.data = res.json();
				  });
  }
*/

	
	makePostRequest(){
		this.sending = true;
		this.errorPost = false;
		this.errData = "";
		this.http.post(
			'http://jsonplaceholder.typicode.com/posts',
			JSON.stringify({
				body: 'bar',
				title: 'foo',
				userId: '1'
			})
		).subscribe(
			(res: Response) => {
				this.data = res.json();
				this.sending = false;
			},
			(err: Error) => {
				this.errData.toString();
				this.errorPost = true;
				this.sending = false;
			}		
		  );
	}
	
}