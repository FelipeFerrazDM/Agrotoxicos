import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController"

const router: Router = Router()

router.get("/agrotoxic229a.com.br", homeController.home);

router.get("/agrotoxic229a.com.br/agrotoxicos", homeController.agrotoxico)

router.get("/agrotoxic229a.com.br/quemsomos" , quemSomosController.sobre)

export { router };