/* eslint-disable indent */
import * as model from '../../model';
import {create} from '../sharedQuerys/create';


interface id {
    id:number|string
}

export  const contribuicao_create= async (data:model.contribuicao): Promise<id| Error| undefined> =>{
    return create(data,'contribuicao',model.interface_contribuicao_reference);
};