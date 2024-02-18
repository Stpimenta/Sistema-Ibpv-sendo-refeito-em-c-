
import {delete_query} from '../sharedQuerys/delete';

export  const evento_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'evento');
    return null;
};