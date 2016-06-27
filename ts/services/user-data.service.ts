export class UserDataService {
  createDb() {
	let user = [
		{
			id: 1,
			email: 'pera@gmail.com',
			username: 'pera',
			password: 'pera1234',
			lastName: 'Peric',
			firstName: 'Perica'
		},
		{
			id: 2,
			email: 'zdera@gmail.com',
			username: 'zdera',
			password: 'zdera1234',
			lastName: 'Zderic',
			firstName: 'Zderica'
		},
		{
			id: 3,
			email: 'cera@gmail.com',
			username: 'cera',
			password: 'cera1234',
			lastName: 'Ceric',
			firstName: 'Cerica'
		},
		{
			id: 4,
			email: 'lusa@gmail.com',
			username: 'lusa',
			password: 'lusa1234',
			lastName: 'Lusic',
			firstName: 'Lusica'
		}
	];

    return { user };
  }
}