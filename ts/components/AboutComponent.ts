import {Component, Type, ViewEncapsulation} from '@angular/core';
//import {CodeblockComponent} from './codeblock.component';
//import {PrismJsDirective}  from './prismjs.directive';
import {EditorComponent} from './editor.component';

@Component({
	selector: 'about',
	//directives: [<Type>PrismJsDirective, <Type>CodeblockComponent],
	directives: [EditorComponent],
	template:
	`

	<h1 class="ui teal header">About</h1>
	
	`,
})
export class AboutComponent {
	constructor(){}
}