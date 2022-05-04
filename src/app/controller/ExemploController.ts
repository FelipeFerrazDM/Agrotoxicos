import { Request, Response } from "express";

class ExemploController{

  public teste(req:Request, res:Response) {

    return res.send('nice pussy bro!');

  }
  
}

export const exemploController = new ExemploController();