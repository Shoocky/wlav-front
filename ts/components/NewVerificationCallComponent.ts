import {Component, OnInit} from '@angular/core';
import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall} from '../classes/verification-call';
import {RouterShareService} from '../services/router-share.service';
import {RouteParams, RouteRegistry, Router} from '@angular/router-deprecated';

@Component({
    selector: 'new-verificaion-call',
    template:`
        <h1> New verification call </h1>
        <ul *ngFor="let flag of flags">
            <li>{{ flag.name}} {{flag.value}}</li>
        </ul>
    `
})
export class NewVerificationCallComponent implements OnInit{
    flags = [
        {name : 'check-assert', value: true},
        {name : 'check-block-conds', value : false},
        {name : 'check-div-zero', value : true},
        {name : 'check-pointers', value : true},
        {name : 'enable-parallel', value : false},
        {name : 'find-first-flawed', value : false},
        {name : 'light', value : false},
        {name : 'memory-flag', value : true},
        {name : 'model', value : false},
        {name : 'print-html', value : false},
        {name : 'skip-inside-loop', value : true},
        {name : 'solver', value : ''},
        {name : 'students-mode', value : false},
        {name : 'track-pointers', value : true},
        {name : 'track-unrecheable', value : false},
        {name : 'urm', value : false},
        {name : 'enable-optimizations', value : false},
        {name : 'loop-unroll-begin', value : 2},
        {name : 'loop-unroll-end', value : 1},
        {name : 'number-threads', value : 4},
        {name : 'timeout', value : 0},
        {name : 'starting-function', value : 'main'}
    ];

    constructor(private verificatonCallService: VerificationCallService,
                private routerShareService: RouterShareService){

    }

    ngOnInit() {
        let id = this.routerShareService.getId();
        console.log(this.flags);
    }
}