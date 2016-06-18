export class ProgramSourceDataService {
  createDb() {
	 let program_source = [
		{
			id: 1,
			userId: 1,
			name: 'program1.c',
			createdAt: '2016-06-16 13:23:01'
		},
		{
			id: 2,
			userId: 1,
			name: 'program2.c',
			createdAt: '2016-06-17 12:13:51'
		},
      	{
      		id: 3,
      		userId: 2,
      		name: 'program3.c',
      		createdAt: '2016-06-18 11:23:31'
      	},
        {
        	id: 4,
        	userId: 2,
        	name: 'program4.c',
        	createdAt: '2016-06-19 10:33:41'
        },
  		{
  			id: 5,
  			userId: 3,
  			name: 'program5.c',
  			createdAt: '2016-06-20 11:43:51'
  		},
		{
			id: 6,
			userId: 3,
			name: 'program6.c',
			createdAt: '2016-06-21 10:53:21'
		},
	    {
	    	id: 7,
	    	userId: 4,
	    	name: 'program7.c',
	    	createdAt: '2016-06-22 12:23:11'
	    },
	    {
	    	id: 8,
	    	userId: 4,
	    	name: 'program8.c',
	    	createdAt: '2016-06-23 12:13:01'
	    }
	];

    return { program_source };
  }
}
