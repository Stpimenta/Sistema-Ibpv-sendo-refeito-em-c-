/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import  * as models from '../../database/model';
import * as providers from '../../database/provider';

interface propsmembro_ministerio extends models.membro_ministerio{}

const bodymembro_ministerioschema:Yup.ObjectSchema<propsmembro_ministerio> = Yup.object().shape({
    id_membro: Yup.number().required().moreThan(0),
    id_ministerio: Yup.number().required().moreThan(0),
    lider:Yup.boolean(),
    funcao:Yup.string(),
});




export const validation_membro_ministerio_create = validation({
    body:bodymembro_ministerioschema
});

export const post_create = async ( req:Request<object,object,propsmembro_ministerio>,res:Response) =>{
    const provider = await providers.membro_miniterio_provider.membro_ministerio_create(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({'error' : provider.message});
    }

    return res.status(StatusCodes.CREATED).json(provider);
    
};