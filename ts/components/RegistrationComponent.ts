import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from '@angular/common';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

function emailValidator(control: Control) : {[s: string]: boolean} {
    if(typeof(control.value)!=='undefined')
        if(!control.value.match(/.@./))
            return {invalidEmail: true};
}
function passwordValidator(control: Control) : {[s: string]: boolean} {
    if(typeof(control.value)!=='undefined'){
        if(!control.value.match(/.[a-z]+/))
            return {notContainingLetter: true};
        if(!control.value.match(/.[0-9]+/))
            return {notContainingNumber: true};
    }
}
@Component({
    selector: 'register',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    templateUrl: 'templates/register.component.html'
})
export class RegistrationComponent{
    myForm: ControlGroup;
    firstName: AbstractControl;
    lastName: AbstractControl;
    username: AbstractControl;
    email : AbstractControl;
    password: AbstractControl;
    repeatedPassword: AbstractControl;
    passMatch : boolean = false;

    constructor(public userService: UserService, public fb: FormBuilder, public router: Router, private http: Http) {
        this.myForm = fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'username': ['', Validators.required],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8), passwordValidator])],
            'repeatedPassword': ['', Validators.compose([Validators.required, Validators.minLength(8), passwordValidator])]
        });
        this.firstName = this.myForm.controls['firstName'];
        this.lastName = this.myForm.controls['lastName'];
        this.username = this.myForm.controls['username'];
        this.email = this.myForm.controls['email'];
        this.password = this.myForm.controls['password'];
        this.repeatedPassword = this.myForm.controls['repeatedPassword'];

    }

    onSubmit(form: any) {
        if (form.password !== form.repeatedPassword) {
            this.passMatch = true;
        }
        else {
            let body = "&username=" + form.username +
                "&password=" + form.password +
                "&firstName=" + form.firstName +
                "&lastName=" + form.lastName +
                "&email=" + form.email;
            console.log("napravilo body");
            console.log(body);
            let headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            this.http.post('http://localhost:8000/register', body, {headers: headers})
                .subscribe(response => {
                    console.log(response.json());
                    let link = ['Login'];
                    this.router.navigate(link);
                },
                    error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
        }
    }
}