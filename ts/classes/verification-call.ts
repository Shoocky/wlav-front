
export class VerificationCall {
	id: number;
    programSourceId: number;
	flags: string;
	stdoutMsg: string;
	stderrMsg: string;
	errorMsg: string;
	createdAt: string;
	status: string;
    output: string;
}

export class Flag{
	name: string;
	value: any;
	default: any;
	min: any = null;
	max: any = null;

	constructor(obj: any){
		this.name    = obj.name? obj.name : '';
		this.value   = obj.value? obj.value : '';
		this.default = obj.default ;
		this.min     = obj.min? obj.min : 0;
		this.max     = obj.max? obj.max : 0;
	}
}


export let ALL_FLAGS: Flag[] = [
        new Flag({
            name : 'check-assert',
            value: null,
            default: true
        }),
        new Flag({
            name : 'check-block-conds',
            value: null,
            default: false
        }),
        new Flag({
            name : 'check-div-zero', 
            value : null,
            default: true
        }),
        new Flag(
        {
            name : 'check-pointers',
            value: null,
            default : true
        }),
        new Flag(
        {
            name : 'enable-parallel',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'find-first-flawed',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'light',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'memory-flag',
            value: null,
            default : true
        }),
        new Flag(
        {
            name : 'model',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'print-html',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'skip-inside-loop',
            value: null,
            default : true
        }),
        new Flag(
        {
            name : 'solver',
            value: null,
            default : ''
        }),
        new Flag(
        {
            name : 'students-mode',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'track-pointers',
            value: null,
            default : true
        }),
        new Flag(
        {
            name : 'track-unrecheable',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'urm',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'enable-optimizations',
            value: null,
            default : false
        }),
        new Flag(
        {
            name : 'loop-unroll-begin',
            value: null,
            default : 2,
            min:1,
            max:3
        }),
        new Flag(
        {
            name : 'loop-unroll-end',
            value: null,
            default : 1,
            min:1,
            max: 18
        }),
        new Flag(
        {
            name : 'number-threads',
            value: null,
            default : 4,
            min: 1,
            max: 10
        }),
        new Flag(
        {
            name : 'timeout',
            value: null,
            default : 0,
            min: 0,
            max: 10000
        }),
		new Flag(
        {
            name : 'starting-function',
            value: null,
            default : 'main'
        })
    ];