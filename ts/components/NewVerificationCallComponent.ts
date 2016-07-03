import {Component, OnInit, ElementRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {VerificationCallService} from '../services/verification-call.service';
import {VerificationCall, Flag, ALL_FLAGS} from '../classes/verification-call';
import {RouterShareService} from '../services/router-share.service';
import {RouteParams, RouteRegistry, Router} from '@angular/router-deprecated';

import {DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';

@Component({
    selector: 'new-verificaion-call',
    directives: [DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: 'templates/new-verification-call.component.html'
})
export class NewVerificationCallComponent implements OnInit{
    possibleFlags: Flag[];
    chosenFlags: Flag[] = [];
    options: string[];
    selectedFlag: Flag = null;
    currentFlagType: string = null;
    id : number;

    constructor(private verificatonCallService: VerificationCallService,
                private routerShareService: RouterShareService,
                private elementRef:ElementRef){
                this.possibleFlags = ALL_FLAGS;
                this.options = this.possibleFlags.map(flag => flag.name);
                
    }

    ngOnInit() {

         this.id = this.routerShareService.getId();

    }

    alertSelected(obj: any){
        console.log("selected" + JSON.stringify(obj));
        var flag = this.possibleFlags.filter(flag => flag.name === obj)[0];
        console.log(JSON.stringify(flag));
        console.log(typeof flag.default);
        this.selectedFlag = flag;
        this.currentFlagType = typeof this.selectedFlag.default;

        /*
        this.chosenFlags.push(this.selectedFlag);
        this.selectedFlag = null;
        console.log(JSON.stringify(this.chosenFlags));\
        */
    }

    addFlag(value: any){
        
        this.selectedFlag.value = value;
        //remove currently added flags from possible flag array
        var index = this.possibleFlags.map(flag => flag.name).indexOf(this.selectedFlag.name);
        console.log("lalla" + index);
        this.possibleFlags.splice(index, 1);

        //remove currently added flag name from options
         var index = this.options.indexOf(this.selectedFlag.name);
        this.options.splice(index, 1);

        this.chosenFlags.push(new Flag(this.selectedFlag));
        this.selectedFlag = null;
        //console.log(JSON.stringify(this.possibleFlags));
    }

    removeFlag(flag: any){
        console.log("remove:" + JSON.stringify(flag));
        var index = this.chosenFlags.map(flag => flag.name).indexOf(flag.name);
        console.log("bebe" + index);
        console.log(JSON.stringify(this.chosenFlags));
        this.chosenFlags.splice(index, 1);
        this.possibleFlags.push(new Flag(flag));
        this.options.push(flag.name);
    }

    startVerification(){
        console.log(JSON.stringify(this.chosenFlags));
        let flags = {};
        this.chosenFlags.forEach( el => flags[el.name] = el.value);
        console.log(JSON.stringify(flags));
        /*this.verificatonCallService.post(this.chosenFlags, this.id).then(res => console.log(res));*/
    }
}

/*
flags: any = {
        "check-assert":
        {
            name : 'check-assert',
            value: null,
            default: true
        },
        'check-block-conds':
        {
            name : 'check-block-conds',
            value: null,
            default: false
        },
        'check-div-zero':
        {
            name : 'check-div-zero', 
            value : null,
            default: true
        },
        'check-pointers':
        {
            name : 'check-pointers',
            value: null,
            default : true
        },
        'enable-parallel':
        {
            name : 'enable-parallel',
            value: null,
            default : false
        },
        'find-first-flawed':
        {
            name : 'find-first-flawed',
            value: null,
            default : false
        },
        'light':
        {
            name : 'light',
            value: null,
            default : false
        },
        'memory-flag':
        {
            name : 'memory-flag',
            value: null,
            default : true
        },
        'model':
        {
            name : 'model',
            value: null,
            default : false
        },
        'print-html':
        {
            name : 'print-html',
            value: null,
            default : false
        },
        'skip-inside-loop':
        {
            name : 'skip-inside-loop',
            value: null,
            default : true
        },
        'solver':
        {
            name : 'solver',
            value: null,
            default : ''
        },
        'students-mode':
        {
            name : 'students-mode',
            value: null,
            default : false
        },
        'track-pointers':
        {
            name : 'track-pointers',
            value: null,
            default : true
        },
        'track-unrecheable':
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
    };
    */