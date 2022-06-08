import { App } from "./app"
import fs from 'fs';
import https from 'https';

const app = new App()

const __PORTA:number = parseInt(process.env.PORT as string) || 8081;


https.createServer({

    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')

}, app.server).listen(__PORTA , ()=> console.log("Cria em https no " + __PORTA));