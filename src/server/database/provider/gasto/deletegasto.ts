
import {delete_query} from '../sharedQuerys/delete';

export  const gasto_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'gasto');
    return null;
};