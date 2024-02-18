import * as generatortoken from './generatortoken';
import * as validation_entrada from './validation_entrada';
import * as update_query_constructor from './update_query_constructor';

export const services = {
    ...generatortoken,
    ...validation_entrada,
    ...update_query_constructor,
};