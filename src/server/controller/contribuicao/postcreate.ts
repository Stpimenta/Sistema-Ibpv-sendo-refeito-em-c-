/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propscontribuicao extends models.contribuicao{}



const bodycontribuicaochema:Yup.ObjectSchema<propscontribuicao> = Yup.object().shape({
    valor:Yup.number().required(),
    descricao:Yup.string().required(),
    data_contribuicao: Yup.date().required(),
    id_membro:Yup.number().moreThan(0),
    id_caixa: Yup.number().required().moreThan(0),
    url_envelope:Yup.string(),
    
});


export const validation_contribuicao_create = validation({
    body:bodycontribuicaochema
});

export const post_create = async ( req:Request<object,object,propscontribuicao>,res:Response) =>{
    const provider = await  providers.contribuicao_provider.contribuicao_create(req.body);

    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }
    
    return res.status(StatusCodes.CREATED).json(provider);
    
};