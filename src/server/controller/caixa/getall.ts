/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as providers from '../../database/provider';


export const get_all = async ( req:Request,res:Response) =>{
    const provider = await  providers.caixa_provider.caixa_getall();

    
    if(provider instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({'error' : 'internal server error'});
    }

    return res.status(StatusCodes.OK).send(provider);
    
};