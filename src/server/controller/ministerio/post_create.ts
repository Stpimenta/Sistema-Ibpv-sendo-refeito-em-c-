/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation,} from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsministerio extends models.ministerio_model{}

const bodyministeriochema:Yup.ObjectSchema<propsministerio> = Yup.object().shape({
    nome:Yup.string().required().max(255).min(1),
    descricao:Yup.string().max(255).min(1),
});

// validaçao do yup
export const validation_ministerio_create = validation({
    body:bodyministeriochema
});

export const post_create = async ( req:Request<object,object,propsministerio>,res:Response) =>{
    const provider = await  providers.ministerio_provider.ministerio_create(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }
    
    return res.status(StatusCodes.CREATED).json(provider);
    
};