/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable quotes */

import { QueryResult } from 'pg';
import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';
type number_page = {count:number};


export  const membro_get_page = async (limit:number, page:number): Promise< object | Error > =>{

    let client;
    const offset:number = (page - 1) * limit;
   

    try {
        client =  await db.connect();
        const data = await client.query(`select id,nome,url_foto,data_nascimento,
        active from membro order by nome limit $1 offset $2`,[limit,offset]);
        const number_page_query:QueryResult<number_page> = await client.query(`select count(*) from membro`);

        const objectreturn = {
            arraydata:data.rows,
            numberPages: Math.ceil(number_page_query.rows[0].count/limit)
        };
        return objectreturn;

    } catch (error) {  
        if(error instanceof Error){
            errorfill(error);
        }
        return Error('serviço indisponivel');
    } finally{
        client?.release();
    }
};




