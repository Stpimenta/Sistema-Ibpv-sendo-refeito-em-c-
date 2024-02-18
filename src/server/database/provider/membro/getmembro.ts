/* eslint-disable quotes */
import {QueryResult } from 'pg';
import { db } from '../../databaseconfig';
import * as model from '../../model/membro';
import { errorfill } from '../../../shared/services/filtererror';
import { servicedocumentEncryption } from '../../../shared/services/ documentencryption/ documentEncryption';

export  const membro_get = async (id:number): Promise< model.membromodel  | Error | undefined> =>{
    let client;
    try {
        client =  await db.connect();
        const data:QueryResult<model.membromodel> = await client.query(`select id,nome,url_foto,token_contribuicao,rg_numero,rg_emissor,
                                                                        cpf,gmail,telefone_pais,telefone_ddd,telefone_numero,bairro_endereco,
                                                                        cidade_endereco,rua_endereco,cep_endereco,numero_endereco,data_nascimento,
                                                                        active from membro where id = $1`,[id]);
        if(data.rows.length == 0){
            throw  Error('membro inexistente');
        }

        data.rows[0].cpf = servicedocumentEncryption.decrypt(data.rows[0].cpf);
        data.rows[0].rg_numero = servicedocumentEncryption.decrypt(data.rows[0].rg_numero);
        return data.rows[0];

    } catch (error) { 
        if(error instanceof Error){
            return  Error (errorfill(error).erro);
        }
    } finally{
        client?.release();
    }
   
};