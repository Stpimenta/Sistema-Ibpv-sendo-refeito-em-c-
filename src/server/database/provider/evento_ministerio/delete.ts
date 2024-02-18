
import { errorfill } from '../../../shared/services/filtererror';
import { db } from '../../databaseconfig';
import  * as models from '../../model';

export  const evento_ministerio_delete = async (data:models.evento_ministerio,): Promise< null| Error> =>{
    let client;
    try {
        client =  await db.connect();
        await client.query('delete from ministerio_evento where id_evento = $1 and id_ministerio = $2;',[data.id_evento,data.id_ministerio]);
    } catch (error) {
        if(error instanceof Error){
            errorfill(error);
        }
    } finally{
        client?.release();
    }
    return null;  
};
