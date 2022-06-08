import { Router } from "express";
import { contatoController } from "./app/controller/ContatoController";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController"

const router: Router = Router()

router.get("/", homeController.home);

router.get("/agrotoxicos", homeController.agrotoxico)

router.get("/quemsomos", quemSomosController.sobre)

router.get("/contato", contatoController.contato)

router.post("/contato/comentario" , contatoController.comentario)

export { router };