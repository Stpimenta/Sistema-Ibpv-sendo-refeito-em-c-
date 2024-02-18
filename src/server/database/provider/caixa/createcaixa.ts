/* eslint-disable indent */
import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id {
    id:number|string
}

export  const caixa_create= async (data:model.caixa): Promise<id | Error |undefined > =>{
    return await create(data,'caixa',model.interface_caixa_reference);
};