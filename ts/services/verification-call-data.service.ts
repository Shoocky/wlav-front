export class VerificationCallDataService {
  createDb() {
		let verification_call = [
			{ 
				id: 1,
				flags: '{ check-assert: false, enable-parallel: true }',
				stdoutMsg: 'Verified',
				stderrMsg: '',
				errorMsg: '',
				createdAt: '2016-06-17 13:23:01',
				programSource_id: 1
			},
			{ 
				id: 2,
				flags: '{ memory-flag: false, students-mode: true }',
				stdoutMsg: 'Verified',
				stderrMsg: '',
				errorMsg: '',
				createdAt: '2016-06-18 13:23:01',
				programSource_id: 2
			},
			{
				id: 3,
				flags: '{ timeout: 5, starting-function: enter }',
				stdoutMsg: 'Not verified',
				stderrMsg: 'Segmentation fault',
				errorMsg: '',
				createdAt: '2016-06-19 13:23:01',
				programSource_id: 3
			},
			{
				id: 4,
				flags: '{ skip-inside-loop: false, model: true }',
				stdoutMsg: 'Verified',
				stderrMsg: '',
				errorMsg: '',
				createdAt: '2016-06-23 13:23:01',
				programSource_id: 4
			},
		    {
		    	id: 5,
		    	flags: '{ memory-flag: false, starting-function: enterInterpreter }',
		    	stdoutMsg: 'Not verified',
		    	stderrMsg: 'Segmentation fault',
		    	errorMsg: '',
		    	createdAt: '2016-06-24 13:23:01',
		    	programSource_id: 5
		    },
      		{
      			id: 6,
      			flags: '{ timeout: 30, students-mode: true}',
      			stdoutMsg: 'Verified',
      			stderrMsg: '',
      			errorMsg: '',
      			createdAt: '2016-06-24 13:23:01',
      			programSource_id: 2
      		},
			{
				id: 7,
				flags: '{ skip-inside-loop: false, model: true }',
				stdoutMsg: 'Not Verified',
				stderrMs: '',
				errorMsg: 'Syntax error',
				createdAt: '2016-06-25 13:23:01',
				programSource_id: 1
			},
		];
    	return { verification_call };
  }
}