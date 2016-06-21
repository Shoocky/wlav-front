import {Component, OnInit, ElementRef} from '@angular/core';
import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';
import {RouterShareService} from '../services/router-share.service';
import {RouteParams, RouteRegistry, Router} from '@angular/router-deprecated';
import {DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';

@Component({
    selector: 'new-verificaion-call',
    directives: [DIRECTIVES],
    templateUrl: 'templates/new-verification-call.component.html'
})
export class NewVerificationCallComponent implements OnInit{

    constructor(private verificatonCallService: VerificationCallService,
                private routerShareService: RouterShareService,
                private elementRef:ElementRef){

    }

    ngOnInit() {

        let id = this.routerShareService.getId();
        console.log(this.flags);

    }

flags = [
        {
            name : 'check-assert',
            value: null,
            default: true
        },
        {
            name : 'check-block-conds',
            value: null,
            default: false
        },
        {
            name : 'check-div-zero', 
            value : null,
            default: true
        },
        {
            name : 'check-pointers',
            value: null,
            default : true
        },
        {
            name : 'enable-parallel',
            value: null,
            default : false
        },
        {
            name : 'find-first-flawed',
            value: null,
            default : false
        },
        {
            name : 'light',
            value: null,
            default : false
        },
        {
            name : 'memory-flag',
            value: null,
            default : true
        },
        {
            name : 'model',
            value: null,
            default : false
        },
        {
            name : 'print-html',
            value: null,
            default : false
        },
        {
            name : 'skip-inside-loop',
            value: null,
            default : true
        },
        {
            name : 'solver',
            value: null,
            default : ''
        },
        {
            name : 'students-mode',
            value: null,
            default : false
        },
        {
            name : 'track-pointers',
            value: null,
            default : true
        },
        {
            name : 'track-unrecheable',
            value: null,
            default : false
        },
        {
            name : 'urm',
            value: null,
            default : false
        },
        {
            name : 'enable-optimizations',
            value: null,
            default : false
        },
        {
            name : 'loop-unroll-begin',
            value: null,
            default : 2
        },
        {
            name : 'loop-unroll-end',
            value: null,
            default : 1
        },
        {
            name : 'number-threads',
            value: null,
            default : 4
        },
        {
            name : 'timeout',
            value: null,
            default : 0
        },
        {
            name : 'starting-function',
            value: null,
            default : 'main'
        }
    ];

}