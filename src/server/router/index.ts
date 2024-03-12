import { Router } from 'express';
import * as controller from '../controller';
import { ensure_authenticatior } from '../shared/middlewares';
import { ValidationRule } from '../shared/middlewares/Validationrule/ValidationRule';
export const router = Router();

//rotas membros
router.post('/membro',ensure_authenticatior,ValidationRule,controller.membro_controller.validation_membro_create,controller.membro_controller.post_create);
router.delete('/membro/:id',ensure_authenticatior,ValidationRule,controller.membro_controller.validation_membro_delete, controller.membro_controller.delete_by_id);
router.get('/membro/id/:id',ensure_authenticatior,ValidationRule,controller.membro_controller.validation_membro_getbyid, controller.membro_controller.get_by_id);
router.get('/membro/',ensure_authenticatior,ValidationRule,controller.membro_controller.validation_membro_page, controller.membro_controller.getpage_by_query);
router.put('/membro/:id',ensure_authenticatior,ValidationRule,controller.membro_controller.validation_membro_put, controller.membro_controller.put_by_id );

//rotas ministerio
router.post('/ministerio',ensure_authenticatior,ValidationRule,controller.ministerio_controller.validation_ministerio_create, controller.ministerio_controller.post_create);
router.get('/ministerio',ensure_authenticatior,ValidationRule,controller.ministerio_controller.get_all);
router.delete('/ministerio/:id',ensure_authenticatior,ValidationRule,controller.ministerio_controller.validation_ministerio_delete,controller.ministerio_controller.delete_by_id);
router.put('/ministerio/:id',ensure_authenticatior,ValidationRule,controller.ministerio_controller.validation_ministerio_put, controller.ministerio_controller.put_by_id);
// router.delete('/membro/:id',controller.membro_controller.validation_membro_delete, controller.membro_controller.delete_by_id);
// router.get('/membro/:id',controller.membro_controller.validation_membro_getbyid, controller.membro_controller.get_by_id);
// router.get('/membro/', controller.membro_controller.validation_membro_page, controller.membro_controller.getpage_by_query);
// router.put('/membro/:id',controller.membro_controller.validation_membro_put, controller.membro_controller.put_by_id );

//rotas gasto
router.delete('/gasto/:id',ensure_authenticatior,ValidationRule,controller.gasto_controller.validation_gasto_delete,controller.gasto_controller.delete_by_id);
router.post('/gasto',ensure_authenticatior,ValidationRule,controller.gasto_controller.validation_gasto_create,controller.gasto_controller.post_create);
router.put('/gasto/:id',ensure_authenticatior,ValidationRule,controller.gasto_controller.validation_gasto_put, controller.gasto_controller.put_by_id);
router.get('/gasto/',ensure_authenticatior,ValidationRule,controller.gasto_controller.validation_gasto_page, controller.gasto_controller.getpage_by_query);


//rotas caixa
router.delete('/caixa/:id',ensure_authenticatior,ValidationRule,controller.caixa_controller.validation_caixa_delete,controller.caixa_controller.delete_by_id);
router.post('/caixa',ensure_authenticatior,ValidationRule,controller.caixa_controller.validation_caixa_create,controller.caixa_controller.post_create);
router.get('/caixa',ensure_authenticatior,ValidationRule,controller.caixa_controller.get_all);
router.get('/caixa/:id',ensure_authenticatior,ValidationRule,controller.caixa_controller.validation_caixa_getbyid,controller.caixa_controller.get_by_id);
router.put('/caixa/:id',ensure_authenticatior,ValidationRule,controller.caixa_controller.validation_caixa_put,controller.caixa_controller.put_by_id);

//rotas contribuicao
router.delete('/contribuicao/:id',ensure_authenticatior,ValidationRule,controller.contribuicao_controller.validation_contribuicao_delete,controller.contribuicao_controller.delete_by_id);
router.post('/contribuicao',ensure_authenticatior, ValidationRule,controller.contribuicao_controller.validation_contribuicao_create, controller.contribuicao_controller.post_create);
router.get('/contribuicao',ensure_authenticatior,ValidationRule,controller.contribuicao_controller.validation_contribuicao_page, controller.contribuicao_controller.getpage_by_query);
// router.get('/caixa/:id',controller.caixa_controller.validation_caixa_getbyid,controller.caixa_controller.get_by_id);
router.put('/contribuicao/:id',ensure_authenticatior,ValidationRule,controller.contribuicao_controller.validation_contribuicao_put,controller.contribuicao_controller.put_by_id);

//rotas evento
router.delete('/evento/:id',ensure_authenticatior,ValidationRule,controller.evento_controller.validation_evento_delete,controller.evento_controller.delete_by_id);
router.post('/evento',ensure_authenticatior,ValidationRule,controller.evento_controller.validation_evento_create,controller.evento_controller.post_create);
router.get('/evento',ensure_authenticatior,ValidationRule,controller.evento_controller.get_all);
router.put('/evento/:id',ensure_authenticatior,ValidationRule,controller.evento_controller.validation_evento_put,controller.evento_controller.put_by_id);

//rotas membro_ministerio
router.delete('/membro_ministerio',ensure_authenticatior, ValidationRule,controller.membro_ministerio_controller.validation_membro_ministerio_delete, controller.membro_ministerio_controller.deletebyid);
router.post('/membro_ministerio',ensure_authenticatior,ValidationRule,controller.membro_ministerio_controller.validation_membro_ministerio_create, controller.membro_ministerio_controller.post_create);

//rotas evento_ministerio
router.delete('/evento_ministerio',ensure_authenticatior, ValidationRule,controller.evento_ministerio_controller.validation_evento_ministerio_delete, controller.evento_ministerio_controller.deletebyid);
router.post('/evento_ministerio',ensure_authenticatior,ValidationRule,controller.evento_ministerio_controller.validation_evento_ministerio_create, controller.evento_ministerio_controller.post_create);

//router singin
router.post('/ibpv/singin',controller.singin_validation,controller.singin);

//router repositorie
router.get('/ibpv/uploadfinanceiro/:filetype',ensure_authenticatior, ValidationRule,controller.getrepositorieToken);
router.get('/ibpv/getimgfinanceiro',ensure_authenticatior, ValidationRule, controller.getsignedurl_validation, controller.getsignedrepositorieurl);