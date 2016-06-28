import {Directive, ElementRef, Renderer, AfterViewInit} from '@angular/core';

declare var CodeMirror: any;

@Directive({
	selector: '[editor]'
})
export class EditorDirective implements AfterViewInit{
	editor: any;
	constructor(public element: ElementRef, public renderer: Renderer){
       

    }

    ngAfterViewInit(){
    	 this.editor = new CodeMirror.fromTextArea(this.element.nativeElement, {lineNumbers: true, mode: {name: "text/x-csrc", globalVars: true}, theme:'material'});
    }
}

/*
material
ttcn
 <link rel="stylesheet" href="node_modules/codemirror/theme/neo.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/railscasts.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/seti.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/twilight.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/yeti.css">
	<link rel="stylesheet" href="node_modules/codemirror/theme/3024-day.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/abcdef.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/ambiance-mobile.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/base16-light.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/bespin.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/hopscotch.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/icecoder.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/isotope.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/ambiance.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/liquibyte.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/material.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/mbo.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/monokai.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/neat.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/paraiso-light.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/rubyblue.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/tomorrow-night-bright.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/ttcn.css">
    <link rel="stylesheet" href="node_modules/codemirror/theme/xq-light.css">
    
    */