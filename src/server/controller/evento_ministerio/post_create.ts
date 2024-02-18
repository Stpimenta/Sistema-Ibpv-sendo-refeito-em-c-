/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsevento_ministerio extends models.evento_ministerio{}

const bodyevento_ministerioschema:Yup.ObjectSchema<propsevento_ministerio> = Yup.object().shape({
    id_evento: Yup.number().required().moreThan(0),
    id_ministerio: Yup.number().required().moreThan(0),
});



export const validation_evento_ministerio_create = validation({
    body:bodyevento_ministerioschema
});

export const post_create = async ( req:Request<object,object,propsevento_ministerio>,res:Response) =>{
    const provider = await providers.evento_ministerio_provider.evento_ministerio_create(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : provider.message});
    }

    return res.status(StatusCodes.CREATED).json(provider);
    
};