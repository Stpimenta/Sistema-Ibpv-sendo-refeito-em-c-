import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
// import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import { StatusCodes } from 'http-status-codes';

interface propsid{
    id?:number
}

interface propsbody extends Partial<Omit<models.membromodel,'senha'>>{
}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

const bodymembroschema:Yup.ObjectSchema<propsbody> = Yup.object().shape({
    nome:Yup.string().min(5),

    //validar depois
    url_foto:Yup.string(), 
    token_contribuicao:Yup.string().max(5),
    rg_numero:Yup.string().min(8).max(15),
    rg_emissor:Yup.string().max(5),
    cpf:Yup.string().min(11).max(11),
    gmail:Yup.string().email(),
    
    //
    telefone_pais:Yup.string().max(4),
    telefone_ddd:Yup.string().max(2),
    telefone_numero:Yup.string().max(9),
    bairro_endereco: Yup.string(),
    cidade_endereco: Yup.string(),
    rua_endereco: Yup.string(),
    cep_endereco: Yup.string(),
    numero_endereco: Yup.string(),
    //
    data_nascimento: Yup.date().max(new Date()), //fazer uma verificação mais rigorosa, passou mes 16 bixo wtf????
    //
    active: Yup.boolean(),
    rule: Yup.number().oneOf([1, 2, 4, 6, 8]),
    uf_endereco:Yup.string(),
});


export const validation_membro_put = validation({
    params:params_id_schema,
    body:bodymembroschema
});


export const put_by_id = async ( req:Request<propsid,object,propsbody>,res:Response) =>{
    req;res;
    if(req.params.id){
        const provider = await providers.membro_provider.update_put(req.params.id, req.body);
       

        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();

     
        
    }
};
