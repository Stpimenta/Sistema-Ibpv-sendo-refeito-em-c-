import  * as post from './post_create';
import * as deletebyid from './delete';
import * as putbyid from './update';
import * as getall from './getall';




export const evento_controller = {
    ...post,
    ...deletebyid,
    ...putbyid,
    ...getall,
};