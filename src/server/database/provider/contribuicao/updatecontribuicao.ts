
import * as model from '../../model/index';
import {update_query} from '../sharedQuerys/update';

export  const update_put = async (id:number,body:Partial<model.contribuicao>): Promise<Error|null> =>{
    return  await update_query(body,model.interface_contribuicao_reference,id,'contribuicao');
};  

