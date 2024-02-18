/* eslint-disable quotes */
import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';


export  const contribuicao_get_page = async (id_caixa:number, data_inicio:Date, data_fim:Date): Promise< object | Error > =>{

    let client;

   

    try {
        client =  await db.connect();
        const data = await client.query(`select  contribuicao.id, contribuicao.valor,contribuicao.tipo, contribuicao.data_contribuicao, contribuicao.url_envelope, caixa.nome as caixa, membro.token_contribuicao  from contribuicao
                                        inner join caixa on contribuicao.id_caixa = caixa.id 
                                        left join membro on contribuicao.id_membro = membro.id
                                        where  caixa.id = $1 and contribuicao.data_contribuicao >= $2 
                                        and contribuicao.data_contribuicao <= $3`, [id_caixa,data_inicio,data_fim]);

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




