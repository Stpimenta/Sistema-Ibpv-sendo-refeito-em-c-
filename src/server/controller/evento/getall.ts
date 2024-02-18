/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response,Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as providers from '../../database/provider';


export const get_all = async ( req:Request,res:Response) =>{
    const provider = await  providers.evento_provider.evento_getall();

    if(provider instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({'error' : 'internal server error'});
    }

    return res.status(StatusCodes.OK).send(provider);
    
};