import express from "express";
import { router } from "./router";
import expressEjsLayouts from "express-ejs-layouts";

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {

        this.server.use(expressEjsLayouts)

        this.server.set('views' , __dirname + "/app/views")
        this.server.set('view engine' , 'ejs')

        this.server.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
        this.server.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
        this.server.use('/jquery', express.static('./node_modules/jquery/dist'));
        this.server.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
        this.server.use('/public', express.static(__dirname + "/app/public"));

        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    private router() {
        this.server.use(router);
    }
}