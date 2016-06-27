
export class User {
	id: number;
	email: string;
	username: string;
	password: string;
	lastName: string;
	firstName: string;

	constructor(id:number, email: string, username: string, password: string, lastName: string, firstName: string){
		this.id = id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.lastName = lastName;
		this.firstName = firstName;
	}
}
