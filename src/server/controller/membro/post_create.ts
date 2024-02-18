/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsmembro extends models.membromodel{}

const bodymembroschema:Yup.ObjectSchema<propsmembro> = Yup.object().shape({
    nome:Yup.string().required().min(5),

    //validar depois
    url_foto:Yup.string(), 
    token_contribuicao:Yup.string().max(5),
    rg_numero:Yup.string().required().min(8).max(15),
    rg_emissor:Yup.string().required().max(5),
    cpf:Yup.string().min(11).max(11),
    gmail:Yup.string().email().required(),
    
    //
    telefone_pais:Yup.string().max(4),
    telefone_ddd:Yup.string().max(2),
    telefone_numero:Yup.string().max(9),
    bairro_endereco: Yup.string().required(),
    cidade_endereco: Yup.string().required(),
    rua_endereco: Yup.string().required(),
    cep_endereco: Yup.string().required(),
    numero_endereco: Yup.string().required(),
    //
    data_nascimento: Yup.date().required().max(new Date()), //fazer uma verificação mais rigorosa, passou mes 16 bixo wtf????
    //
    active: Yup.boolean().required(),
    senha: Yup.string().required().min(5),
    rule: Yup.number().required().oneOf([1, 2, 4, 8])
});


export const validation_membro_create = validation({
    body:bodymembroschema
});

export const post_create = async ( req:Request<object,object,propsmembro>,res:Response) =>{
    const provider = await providers.membro_provider.membro_create(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }

    return res.status(StatusCodes.CREATED).json(provider);
};




