
import {delete_query} from '../sharedQuerys/delete';

export  const caixa_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'caixa');
    return null;
};
