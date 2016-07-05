
export class User {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password : string;

	constructor(firstName: string, lastName: string, email: string, username: string , password: string){
		this.email = email;
		this.username = username;
		this.lastName = lastName;
		this.firstName = firstName;
		this.password = password;
	}
}
