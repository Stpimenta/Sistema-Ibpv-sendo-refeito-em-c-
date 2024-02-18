
import {delete_query} from '../sharedQuerys/delete';

export  const contribuicao_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'contribuicao');
    return null;
};