/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsgasto extends models.gasto{}

const bodygastochema:Yup.ObjectSchema<propsgasto> = Yup.object().shape({
    valor:Yup.number().required(),
    descricao:Yup.string(),
    nome:Yup.string().required(),
    numero_fiscal:Yup.string(),
    url_comprovante:Yup.string(),
    id_caixa: Yup.number().required().moreThan(0),
    data_gasto: Yup.date().required()
});


export const validation_gasto_create = validation({
    body:bodygastochema
});

export const post_create = async ( req:Request<object,object,propsgasto>,res:Response) =>{
    const provider = await  providers.gasto_provider.gasto_create(req.body);

    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }
    
    return res.status(StatusCodes.CREATED).json(provider);
    
};