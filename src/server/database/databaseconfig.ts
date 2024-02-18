import { Pool} from 'pg';
import 'dotenv/config';

export const db = new Pool({
    host: process.env.HOST,
    user:process.env.USER_DB,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    max:20,
    idleTimeoutMillis:30000,
    connectionTimeoutMillis:2000,
    port: Number(process.env.PORT_DB)
});

db.on('error', (err,client)=>{
    console.log(err,client);
});

