
import {delete_query} from '../sharedQuerys/delete';

export  const ministerio_delete = async (id:number): Promise< Error | null> =>{
    await delete_query(id,'ministerio');
    return null;
};