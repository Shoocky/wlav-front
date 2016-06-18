export class  InMemoryDataService{
	createDb(){
		let heroes = [
			{id: 11, name: 'Mr. Nice'},
			{id: 12, name: 'Narco'},
			{id: 13, name: 'Bombasto'},
			{id: 14, name: 'Celeritas'}
		
		];
		return { heroes };
	}
}