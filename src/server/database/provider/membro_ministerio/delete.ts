
import { errorfill } from '../../../shared/services/filtererror';
import { db } from '../../databaseconfig';
import  * as models from '../../model';

export  const membro_ministerio_delete = async (data:models.membro_ministerio,): Promise< null| Error> =>{
    let client;
    try {
        client =  await db.connect();
        await client.query('delete from membro_ministerio where id_membro = $1 and id_ministerio = $2;',[data.id_membro,data.id_ministerio]);
    } catch (error) {
        if(error instanceof Error){
            errorfill(error);
        }
        console.log(error);
    } finally{
        client?.release();
    }
    return null;  
};
