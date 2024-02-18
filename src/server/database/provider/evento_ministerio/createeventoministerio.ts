import * as model from '../../model';
import {create} from '../sharedQuerys/create';

interface id{
    id:number|string
}

export  const  evento_ministerio_create= async (data:model.membro_ministerio): Promise<id | Error | undefined> =>{
    return create(data,'ministerio_evento',model.interface_evento_ministerio_reference);
};