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
//Deletar uma conta pelo cpf
router.delete("/account/cpf", async (request, response) => { await accountController.deleteAccountCpf( request, response ) })
//Deletar uma conta pelo id
router.delete("/account/id", async (request, response) => { await accountController.deleteAccountId( request, response ) })
//Buscar uma conta pelo cpf
router.get("/account/cpf", async ( request, response ) => { await accountController.getAccountCpf( request, response ) })
//Create email
router.post("/account/email", async (request, response) => { await accountController.createEmail( request, response ) })
//Buscar todos os email
router.get("/emails", async ( request, response ) => { await accountController.findAllEmail( request, response ) } )
//Delete email
router.delete("/email", async ( request, response ) => { await accountController.deleteEmail( request, response ) } )
//Update Tipo Conta
router.put("/typeaccount", async ( request, response ) => { await accountController.updateTypeAccount( request, response ) } )
//Criar Tipo Conta
router.post("/typeaccount", async ( request, response ) => { await accountController.createTypeAccount( request, response ) } )
//finda all type account
router.get("/typeaccount", async ( request, response ) => { await accountController.getAllTypeAccount( request, response ) } )
//delete typeaccount
router.delete("/typeaccount", async (request, response) => { await accountController.deleteTypeAccount( request, response ) })
//finda all hair
router.get("/hair", async ( request, response ) => { await accountController.getAllHair( request, response ) } )
//create hair
router.post("/hair", async ( request, response ) => { await accountController.createHair( request, response ) } )
//update hair
router.put("/hair", async ( request, response ) => { await accountController.updateHair( request, response ) } )
//delete hair
router.delete("/hair", async ( request, response ) => { await accountController.deleteHair( request, response ) } )

module.exports = router