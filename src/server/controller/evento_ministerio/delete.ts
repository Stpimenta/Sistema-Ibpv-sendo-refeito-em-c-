import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as providers from '../../database/provider';

interface propsevento_ministerio {
    id_evento: number,
    id_ministerio: number 
}

const bodyevento_ministerioschema:Yup.ObjectSchema<propsevento_ministerio> = Yup.object().shape({
    id_evento: Yup.number().required().moreThan(0),
    id_ministerio: Yup.number().required().moreThan(0),
});

export const validation_evento_ministerio_delete = validation({
    body:bodyevento_ministerioschema
});

export const deletebyid = async ( req:Request<object,object,propsevento_ministerio>,res:Response) =>{
    const provider = await providers.evento_ministerio_provider.evento_ministerio_delete(req.body);
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : 'internal server error'});
    }
    return res.status(StatusCodes.NO_CONTENT).json(provider);
    
};