/* eslint-disable indent */
/* eslint-disable quotes */

import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';
export  const evento_getall = async (): Promise<Error | Array<object>> =>{

    let client;
    try {
        client =  await db.connect();
        const db_data = await client.query(`select * from evento`); 
      
        return db_data.rows;
    } catch (error) { 
        if(error instanceof Error){
            errorfill(error);
        }
        return Error(''+error);
    } finally{
        client?.release();
    }
  
};