import express from 'express';
import './shared/services/yup.translation/yupTraslantion'; //deve ficar antes de router para executar as traducoes
import { router } from './router';
import 'dotenv/config';
import cors from 'cors';

export const app = express ();
app.use(cors({
    origin: process.env.CORS_DOMAIN_PERMISSON
}));
app.use(express.json());
app.use(router);





