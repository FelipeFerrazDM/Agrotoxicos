import { App } from "./app"

new App().server.listen(8081 , () => {

    console.log("Servidor de cria rondando na porta 8081");

});