import { app } from './server/server';
import 'dotenv/config';

const port:number= Number(process.env.PORT) || 3000;
app.listen(port, ()=>{
    console.log(`servidor ${port}`);
});