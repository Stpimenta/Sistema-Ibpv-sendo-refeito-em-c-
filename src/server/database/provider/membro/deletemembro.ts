import {delete_query} from '../sharedQuerys/delete';

export  const membro_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'membro');
    return null;
};