/* eslint-disable indent */
import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id {
    id:number|string
}

export  const gasto_create= async (data:model.gasto): Promise<id | Error| undefined> =>{
    return create(data,'gasto',model.interface_gasto_reference);
};