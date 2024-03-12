/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import * as providers from '../../database/provider';

interface singIn_ministerio{
    gmail:string,
    senha:string
}

const bodymembro_ministerioschema:Yup.ObjectSchema<singIn_ministerio> = Yup.object().shape({
    gmail:Yup.string().email().required(),
    senha:Yup.string().required()
});




export const singin_validation = validation({
    body:bodymembro_ministerioschema
});


export const singin = async ( req:Request<object,object,singIn_ministerio>,res:Response) =>{
    const provider = await providers.sigin(req.body);
    if(typeof provider == 'object'){
        if(provider.status){
            return res.status(provider.status).json({error : provider.erro});
        }
      
    }
    
    return res.status(StatusCodes.OK).json({acessToken:provider});
   
    //return res.status(StatusCodes.CREATED).json(provider);
    
};