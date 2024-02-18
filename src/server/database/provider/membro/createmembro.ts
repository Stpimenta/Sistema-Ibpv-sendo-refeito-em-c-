/* eslint-disable indent */
/* eslint-disable quotes */

import { db } from '../../databaseconfig';
import * as model from '../../model';
import {generatortoken} from '../../../shared/services/db_Services/generatortoken';
import { errorfill } from '../../../shared/services/filtererror';
import { Passcrypto } from '../../../shared/services/PassCrypto/Passcrypto';
import { servicedocumentEncryption } from '../../../shared/services/ documentencryption/ documentEncryption';

interface id {
    id:number
}
//add todos os parametros e return para a api de fato saber se deu certo.
export  const membro_create = async (data:model.membromodel):  Promise< id | Error | undefined> =>{
    let client;
  


    try {
        client =  await db.connect();

        //criptografar
        data.senha = await Passcrypto.hashpass(data.senha);
        data.cpf  = servicedocumentEncryption.encrypt(data.cpf);
        data.rg_numero  = servicedocumentEncryption.encrypt(data.rg_numero);

        const  querydata = await client.query(`insert into membro 
                      (nome,
                       url_foto,
                       token_contribuicao,
                       rg_numero,
                       rg_emissor,
                       cpf,
                       gmail,
                       telefone_pais,
                       telefone_ddd,
                       telefone_numero,
                       bairro_endereco,
                       cidade_endereco,
                       rua_endereco,
                       cep_endereco,
                       numero_endereco,
                       data_nascimento,
                       active,
                       senha,
                       rule)
                       values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,$17,$18,$19) returning id`, //parametrizaçao
                     [
                        data.nome,
                        data.url_foto,
                        data.token_contribuicao = await generatortoken(data,client), //funcao para gerar sempre u token unico
                        data.rg_numero,
                        data.rg_emissor,
                        data.cpf,
                        data.gmail,  // gmail
                        data.telefone_pais,
                        data.telefone_ddd,
                        data.telefone_numero,
                        data.bairro_endereco,
                        data.cidade_endereco,
                        data.rua_endereco,
                        data.cep_endereco,
                        data.numero_endereco,
                        data.data_nascimento,
                        data.active,
                        data.senha,
                        data.rule
                     ]);
            const id:number = querydata.rows[0].id;
            return{id:id};

    } catch (error) { 
        if(error instanceof Error){
            return Error (errorfill(error).erro);
        }
    } finally{
        client?.release();
    }
};


