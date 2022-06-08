import { Request, Response } from "express";

class QuemSomosController {

    public sobre(req:Request, res:Response){

        res.render("sobre")

    }

}

export const quemSomosController = new QuemSomosController()