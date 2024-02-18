/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propscaixa extends models.caixa{}

const bodycaixachema:Yup.ObjectSchema<propscaixa> = Yup.object().shape({
    nome:Yup.string().required().max(255),
    valor_total: Yup.number()
});


export const validation_caixa_create = validation({
    body:bodycaixachema
});

export const post_create = async ( req:Request<object,object,propscaixa>,res:Response) =>{
    const provider = await  providers.caixa_provider.caixa_create(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }
    return res.status(StatusCodes.CREATED).json(provider);
    
};