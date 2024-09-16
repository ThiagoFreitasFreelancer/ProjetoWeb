const { Router } = require("express");
const router = Router()
const CompanyController = require("../Controller/Company.controller");
const companyController = new CompanyController()

//Buscar todas as empresas
router.get("/company", async ( request, response ) => { await companyController.getAllCompany( request, response ) })
//Buscar uma empresas
router.get("/company/id", async ( request, response ) => { await companyController.getCompanyId( request, response ) })
//Criar uma empresas
router.post("/company", async (request, response) => { await companyController.createCompany( request, response ) })
//Atualizar um empresas
router.put("/company", async (request, response) => { await companyController.updateCompany( request, response ) })

module.exports = router