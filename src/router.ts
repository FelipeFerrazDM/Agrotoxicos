import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { exemploController} from "./app/controller/ExemploController";

const router: Router = Router()

router.get("/", exemploController.teste);

router.get("/x", homeController.home);

export { router };