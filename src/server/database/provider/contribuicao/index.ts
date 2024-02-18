import * as contribuicao_create_P from './createcontribuicao';
import * as contribuicao_delete_P from './deletecontribuicao';
import * as contribuicao_put_P from './updatecontribuicao';
import * as contribuicao_getpage_P from './getcontribuicaopag';

export const contribuicao_provider = {
    ...contribuicao_create_P,
    ...contribuicao_delete_P,
    ...contribuicao_put_P,
    ...contribuicao_getpage_P,
};