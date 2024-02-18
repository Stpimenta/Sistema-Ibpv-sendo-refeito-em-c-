import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id{
    id:number|string
}

export  const membro_ministerio_create= async (data:model.membro_ministerio): Promise<id| Error| undefined> =>{
    return create(data,'membro_ministerio',model.interface_membro_ministerio_reference);
};