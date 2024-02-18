
import * as model from '../../../database/model/index';

import {update_query} from '../sharedQuerys/update';

export  const update_put = async (id:number,body:Partial<model.gasto>): Promise<Error|null> =>{
    return  await update_query(body,model.interface_gasto_reference,id,'gasto');
};  

