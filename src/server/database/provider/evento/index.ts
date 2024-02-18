import * as evento_create from './createevento';
import * as evento_getall from './getallevento';
import * as evento_delete from './deleteevento';
import * as evento_put from './updateevento';

export const evento_provider = {
    ...evento_create,
    ...evento_getall,
    ...evento_delete,
    ...evento_put,
};