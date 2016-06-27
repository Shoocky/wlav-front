import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {Router} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, AbstractControl} from '@angular/common';

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

    constructor(public userService: UserService, public fb: FormBuilder, public router: Router) {
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
        /*let id = this.userService.getLastId();*/
        let user = new User(5, form.email, form.username, form.password, form.lastName, form.firstName);
        this.userService.save(user);
        console.log('You submitted: ', user.firstName, user.lastName);
        console.log('Uslo u submit');
        let link = ['Login'];
        this.router.navigate(link);
    }
}