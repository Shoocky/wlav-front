export class ProgramSourceDataService {
  createDb() {
	 let program_source = [
		{
			id: 1,
			userId: 1,
			name: 'program1.c',
			createdAt: '16.06.2016. 13:23:01'
		},
		{
			id: 2,
			userId: 1,
			name: 'program2.c',
			createdAt: '17.06.2016. 12:13:51'
		},
      	{
      		id: 3,
      		userId: 2,
      		name: 'program3.c',
      		createdAt: '18.06.2016. 11:23:31'
      	},
        {
        	id: 4,
        	userId: 2,
        	name: 'program4.c',
        	createdAt: '19.06.2016. 10:33:41'
        },
  		{
  			id: 5,
  			userId: 3,
  			name: 'program5.c',
  			createdAt: '20.06.2016. 11:43:51'
  		},
		{
			id: 6,
			userId: 3,
			name: 'program6.c',
			createdAt: '21.06.2016. 10:53:21'
		},
	    {
	    	id: 7,
	    	userId: 4,
	    	name: 'program7.c',
	    	createdAt: '22.06.2016. 12:23:11'
	    },
	    {
	    	id: 8,
	    	userId: 4,
	    	name: 'program8.c',
	    	createdAt: '23.06.2016. 12:13:01'
	    }
	];

    return { program_source };
  }
}
