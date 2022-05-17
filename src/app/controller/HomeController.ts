import { Request, Response } from "express";

class HomeController {

    public home (req:Request, res:Response) {
        return res.render("home")
    }

    public agrotoxico (req:Request, res:Response) {
        return res.render("agrotoxicos")
    }
}

export const homeController = new HomeController()