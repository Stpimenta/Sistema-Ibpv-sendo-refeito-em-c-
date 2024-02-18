import {QueryResult } from 'pg';
import { db } from '../../databaseconfig';
import * as model from '../../model/membro';
import { errorfill } from '../../../shared/services/filtererror';


export  const caixa_get = async (id:number): Promise< model.membromodel  | Error | undefined> =>{
    let client;
    try {
        client =  await db.connect();
        const data:QueryResult<model.membromodel> = await client.query('select *from caixa where id = $1',[id]);
        if(data.rows.length == 0){
            throw  Error('caixa inexistente');
        }
        return data.rows[0];
    } catch (error) {  
        if(error instanceof Error){
          
            return  Error(errorfill(error).erro);
        }
        
    } finally{
        client?.release();
    }
   
};