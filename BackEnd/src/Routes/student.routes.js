const { Router } = require("express");
const router = Router()
const StudentController = require("../Controller/student.controller");
const studentController = new StudentController()

//Buscar todas as conta
router.get("/student", async ( request, response ) => { await studentController.getAllAccount( request, response ) })
//Criar uma conta
router.post("/student", async (request, response) => { await studentController.createAccount( request, response ) })
//Atualizar um conta
router.put("/student", async (request, response) => { await studentController.updateAccount( request, response ) })
//Deletar uma conta pelo id
router.delete("/student/id", async (request, response) => { await studentController.deleteAccountId( request, response ) })

module.exports = router
