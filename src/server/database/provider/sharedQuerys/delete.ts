
import { errorfill } from '../../../shared/services/filtererror';
import { db } from '../../databaseconfig';

type tabela = 'membro' | 'caixa' | 'ministerio' | 'evento' | 'contribuicao' | 'gasto' | 'membro_ministerio' | 'evento_ministerio';


export  const delete_query = async (id:number, table:tabela): Promise< null| Error> =>{
    let client;
    try {
        client =  await db.connect();
        await client.query(`delete from ${table} where id = $1`,[id]);
    } catch (error) {
        if(error instanceof Error){
            return Error(errorfill(error).erro);
        }
    } finally{
        client?.release();
    }
    return null;  // se tiver erro retorna 1 se n null;
};



