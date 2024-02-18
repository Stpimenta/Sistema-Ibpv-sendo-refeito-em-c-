/* eslint-disable indent */
/* eslint-disable quotes */
import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id {
    id:number|string
}

export  const ministerio_create= async (data:model.ministerio_model): Promise <id | Error | undefined> =>{
   return create(data,'ministerio',model.interface_ministerio_reference);
};