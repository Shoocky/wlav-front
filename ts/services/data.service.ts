export class DataService {
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

	let verification_call = [
		{ 
			id: 1,
			flags: '{ check-assert: false, enable-parallel: true }',
			stdoutMsg: 'Verified',
			stderrMsg: '',
			errorMsg: '',
			createdAt: '2016-06-17 13:23:01',
			programSourceId: 1
		},
		{ 
			id: 2,
			flags: '{ memory-flag: false, students-mode: true }',
			stdoutMsg: 'Verified',
			stderrMsg: '',
			errorMsg: '',
			createdAt: '2016-06-18 13:23:01',
			programSourceId: 2
		},
		{
			id: 3,
			flags: '{ timeout: 5, starting-function: enter }',
			stdoutMsg: 'Not verified',
			stderrMsg: 'Segmentation fault',
			errorMsg: '',
			createdAt: '2016-06-19 13:23:01',
			programSourceId: 3
		},
		{
			id: 4,
			flags: '{ skip-inside-loop: false, model: true }',
			stdoutMsg: 'Verified',
			stderrMsg: '',
			errorMsg: '',
			createdAt: '2016-06-23 13:23:01',
			programSourceId: 4
		},
	    {
	    	id: 5,
	    	flags: '{ memory-flag: false, starting-function: enterInterpreter }',
	    	stdoutMsg: 'Not verified',
	    	stderrMsg: 'Segmentation fault',
	    	errorMsg: '',
	    	createdAt: '2016-06-24 13:23:01',
	    	programSourceId: 5
	    },
	     	{
	     		id: 6,
	     		flags: '{ timeout: 30, students-mode: true}',
	     		stdoutMsg: 'Verified',
	     		stderrMsg: '',
	     		errorMsg: '',
	     		createdAt: '2016-06-24 13:23:01',
	     		programSourceId: 2
	     	},
		{
			id: 7,
			flags: '{ skip-inside-loop: false, model: true }',
			stdoutMsg: 'Not Verified',
			stderrMs: '',
			errorMsg: 'Syntax error',
			createdAt: '2016-06-25 13:23:01',
			programSourceId: 1
		}
	];

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

	let heroes = [
		{id: 11, name: 'Mr. Nice'},
		{id: 12, name: 'Narco'},
		{id: 13, name: 'Bombasto'},
		{id: 14, name: 'Celeritas'}
	
	];

    return { program_source, verification_call, user, heroes };
  }
}
