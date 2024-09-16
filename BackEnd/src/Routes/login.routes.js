const { Router } = require("express")
const router = Router()
const Login = require("../Controller/Login.controller");
const login = new Login()

//Rota de logar
router.post("/login", async ( request, response ) => { await login.logar( request, response ) } );

module.exports = router;