import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as providers from '../../database/provider';

interface propsmembro_ministerio {
    id_membro: number,
    id_ministerio: number 
}

const bodymembro_ministerioschema:Yup.ObjectSchema<propsmembro_ministerio> = Yup.object().shape({
    id_membro: Yup.number().required().moreThan(0),
    id_ministerio: Yup.number().required().moreThan(0),
});

export const validation_membro_ministerio_delete = validation({
    body:bodymembro_ministerioschema
});

export const deletebyid = async ( req:Request<object,object,propsmembro_ministerio>,res:Response) =>{
    const provider = await providers.membro_miniterio_provider.membro_ministerio_delete(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({'error' : 'internal server error'});
    }
    return res.status(StatusCodes.NO_CONTENT).json(provider);
    
};