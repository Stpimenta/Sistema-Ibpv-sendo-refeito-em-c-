import * as post from './post_create';
import * as getall from './getall';
import * as deletebyid from './delete';
import * as updatebyid from './update';

export const ministerio_controller = {
    ...post,
    ...getall,
    ...deletebyid,
    ...updatebyid,
};