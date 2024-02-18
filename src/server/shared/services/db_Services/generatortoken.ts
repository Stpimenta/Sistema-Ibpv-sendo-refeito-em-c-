import * as model from '../../../database/model';
import {PoolClient} from 'pg';

export const generatortoken = async (body_content:model.membromodel, client:PoolClient): Promise<string> => {
    client;
    if(body_content.token_contribuicao != null){
        return body_content.token_contribuicao;
    } 
    let tokenstate:boolean = false;
    let token:string = '';

    while(tokenstate == false){
        token = Math.random().toString(36).substring(2,7).toUpperCase();
        try {
            const data = await client.query('select * from membro where token_contribuicao = $1',[token]);
            if (data.rows.length == 0){
                tokenstate = true;  
                break;
            }

        } catch (error) {
            console.log(' impossivel gerar token banco indisponivel');
        }
    }
    return token;
};