import  * as post from './post_create';
import * as deletebyid from './delete';
import * as getbyid from './get';
import * as putbyid from './update';
import * as getpage from './getpag';
export const membro_controller = {
    ...post,
    ...deletebyid,
    ...getbyid,
    ...putbyid,
    ...getpage,
};