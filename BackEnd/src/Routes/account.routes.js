const { Router } = require("express");
const router = Router()
const AccountController = require("../Controller/Account.controller");
const accountController = new AccountController()

//Buscar todas as conta
router.get("/account", async ( request, response ) => { await accountController.getAllAccount( request, response ) })
//Criar uma conta
router.post("/account", async (request, response) => { await accountController.createAccount( request, response ) })
//Atualizar um conta
router.put("/account", async (request, response) => { await accountController.updateAccount( request, response ) })
//Deletar uma conta pelo id
router.delete("/account/id", async (request, response) => { await accountController.deleteAccountId( request, response ) })

module.exports = router
