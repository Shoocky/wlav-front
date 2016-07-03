import {VerificationCall} from './verification-call';

export class ProgramSource {
	id: number;
   name: string;
	createdAt: string;
   userId: number;
   verificationCalls: VerificationCall[];
   source: string;
   constructor(obj: any){
      this.id = obj.id? obj.id : null;
      this.name = obj.name? obj.name: null;
      this.createdAt = obj.createdAt? obj.createdAt: null;
      this.userId = obj.userId? obj.userId : null;
      this.verificationCalls = obj.verificationCalls? obj.verificationCall : [];
      this.source = obj.source? obj.source : '';
   }
}

/*
Date.createFromMysql = function(mysql_string)
{ 
   var t, result = null;

   if( typeof mysql_string === 'string' )
   {
      t = mysql_string.split(/[- :]/);

      //when t[3], t[4] and t[5] are missing they defaults to zero
      result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
   }

   return result;   
}
*/