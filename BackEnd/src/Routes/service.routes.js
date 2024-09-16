const { Router } = require("express");
const rota = Router()
const ServiceController = require("../Controller/Service.controller");
const servicecontroller = new ServiceController()

//Criar servico
rota.post("/service", async (request, response) => { await servicecontroller.addService( request, response ); });
//Atualizar servico
rota.put("/service",  async (request, response) => {  await servicecontroller.updateService( request, response ); });
//Pegar todos 
rota.get("/service", async (request, response) => { await servicecontroller.findAll( request, response ) });
//Pegar um
rota.get("/service/one", async (request, response) => { await servicecontroller.findService( request, response ); });
//Delete service
rota.delete("/service", async (request, response) => { await servicecontroller.deleteService( request, response ); });
//Pegar status de servico
rota.get("/service/status", async (request, response) =>{ await servicecontroller.findServiceStatus( request, response ); })

module.exports = rota