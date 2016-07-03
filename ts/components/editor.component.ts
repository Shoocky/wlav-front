import {Component, ElementRef, Input} from '@angular/core';
import {EditorDirective} from '../directives/editor.directive';

@Component({
	selector: 'editor',
	template:
	`
	
	<textarea editor id="code" name="code">
		{{ source }}
	</textarea>
	
	`,
	directives: [EditorDirective]
})
export class EditorComponent{
  @Input() source: string;
	constructor(){}
}