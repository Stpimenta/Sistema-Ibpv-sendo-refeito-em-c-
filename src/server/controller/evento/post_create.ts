/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsevento extends models.evento{}

const bodyeventochema:Yup.ObjectSchema<propsevento> = Yup.object().shape({
    nome:Yup.string().required(),
    descricao:Yup.string().max(400),
    data_evento: Yup.date().required()
});


export const validation_evento_create = validation({
    body:bodyeventochema
});

export const post_create = async ( req:Request<object,object,propsevento>,res:Response) =>{
    const provider = await  providers.evento_provider.evento_create(req.body);

    if(provider instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({'error' : 'internal server error'});
    }
    
    return res.status(StatusCodes.CREATED).json(provider);
    
};