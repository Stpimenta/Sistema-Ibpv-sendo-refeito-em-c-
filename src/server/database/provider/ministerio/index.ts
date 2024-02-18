import * as ministerio_create from './createministerio';
import * as ministerio_getall from './getallministerio';
import * as ministerio_delete from './deleteministerio';
import * as ministerio_put from './updateministerio';

export const ministerio_provider = {
    ...ministerio_create,
    ...ministerio_getall,
    ...ministerio_delete,
    ...ministerio_put,
};