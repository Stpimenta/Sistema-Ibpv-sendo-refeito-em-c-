
import { errorfill } from '../../../shared/services/filtererror';
import { db } from '../../databaseconfig';

type tabela = 'membro' | 'caixa' | 'ministerio' | 'evento' | 'contribuicao' | 'gasto' | 'membro_ministerio' | 'evento_ministerio';


export  const delete_query = async (id:[], table:tabela, data:object): Promise< null| Error> =>{
    let client;
    data;
    try {
        client =  await db.connect();
        await client.query(`delete from ${table} where ${1} = 163 AND ${1} = 103;`,id);
    } catch (error) {
        if(error instanceof Error){
            errorfill(error);
        }
    } finally{
        client?.release();
    }
    return null;  // se tiver erro retorna 1 se n null;
};



