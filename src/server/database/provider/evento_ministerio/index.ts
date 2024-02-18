import * as evento_ministerio_create_P from './createeventoministerio';
import * as deletebyid from './delete';

export const evento_ministerio_provider = {
    ...evento_ministerio_create_P ,
    ... deletebyid
};