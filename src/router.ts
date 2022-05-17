import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController"

const router: Router = Router()

router.get("/", homeController.home);

router.get("/agrotoxicos", homeController.agrotoxico)

router.get("/quemsomos" , quemSomosController.sobre)

export { router };