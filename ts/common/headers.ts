import {Headers} from '@angular/http';

export function  contentHeaders(){ 
	let contentHeaders = new Headers();
	contentHeaders.append('Accept', 'application/json');
	contentHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
	console.log('headers: ' + 'Authorization', 'Bearer ' + localStorage.getItem('id_token'));
	return contentHeaders;
}