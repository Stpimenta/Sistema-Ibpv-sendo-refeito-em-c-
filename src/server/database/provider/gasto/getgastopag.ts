/* eslint-disable quotes */
import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';


export  const gasto_get_page = async (id_caixa:number, data_inicio:Date, data_fim:Date): Promise< object | Error > =>{

    let client;
    try {
        client =  await db.connect();
        const data = await client.query(`select gasto.id, gasto.valor, gasto.nome, gasto.data_gasto, caixa.nome as caixa from gasto 
                                         inner join caixa on gasto.id_caixa = caixa.id 
                                         where  caixa.id = $1 and gasto.data_gasto >= $2 AND gasto.data_gasto <= $3`, [id_caixa,data_inicio,data_fim]);

        const objectreturn = {
            arraydata:data.rows,
        };
        return objectreturn;

    } catch (error) {  
        if(error instanceof Error){
            errorfill(error);
        }
        return Error('serviço indisponivel');
    } finally{
        client?.release();
    }
};




