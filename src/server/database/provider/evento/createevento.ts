/* eslint-disable indent */
/* eslint-disable quotes */
import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id {
    id:number|string
}

export  const evento_create= async (data:model.evento): Promise<id | Error | undefined> =>{
    return create(data,'evento',model.interface_evento_reference);
};