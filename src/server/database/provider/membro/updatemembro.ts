/* eslint-disable @typescript-eslint/no-unused-vars */
import * as model from '../../../database/model/index';
import { servicedocumentEncryption } from '../../../shared/services/ documentencryption/ documentEncryption';
import {update_query} from '../sharedQuerys/update';
export  const update_put = async (id:number,body:Partial<model.membromodel>): Promise<Error|null>=>{

    if(body.cpf){
        body.cpf = servicedocumentEncryption.encrypt(body.cpf);
    }

    if(body.rg_numero){
        body.rg_numero = servicedocumentEncryption.encrypt(body.rg_numero);
    }

    return  await update_query(body,model.interface_membro_reference,id,'membro');
};  

 


