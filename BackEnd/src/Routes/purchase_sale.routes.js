const { Router } = require("express");
const PurchaseSaleController = require("../Controller/purchase_sale.controller");

const purchase_salecontroller = new PurchaseSaleController()

const rota = Router()

//Adicionar venda ao colaborador
rota.post("/account/sale", async (request, response) => { await purchase_salecontroller.addSale( request, response ); });

//buascar venda do colaborador
rota.get("/account/sale", async (request, response) => { await purchase_salecontroller.findSaleAccount( request, response ); });

//Pegar todas as vendas
rota.get("/sales", async (request, response) => { await purchase_salecontroller.findAllSale( request, response ) });

//Pegar um venda
rota.get("/sale", async (request, response) => { await purchase_salecontroller.findSale( request, response ) });

//Deletar uma venda
rota.delete("/sale", async (request, response) => { await purchase_salecontroller.deleteSale( request, response ) })


//Adicionar compra ao colaborador
rota.post("/account/purchase", async (request, response) => { await purchase_salecontroller.addSale( request, response ); });

//buascar compra do colaborador
rota.get("/account/purchase", async (request, response) => { await purchase_salecontroller.findSaleAccount( request, response ); });

//Pegar todas as compras
rota.get("/purchases", async (request, response) => { await purchase_salecontroller.findAllSale( request, response ) });

//Pegar um compra
rota.get("/purchase", async (request, response) => { await purchase_salecontroller.findSale( request, response ) });

//Deletar uma compra
rota.delete("/purchase", async (request, response) => { await purchase_salecontroller.deleteSale( request, response ); });


module.exports = rota