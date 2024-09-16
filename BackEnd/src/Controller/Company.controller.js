const companyRepository  = require("../Modules/Repositories/company.repository.js");
const emailRepository = require("../Modules/Repositories/email.repository.js");
const companyRepo = new companyRepository();
const emailRepo = new emailRepository();

module.exports = class companyController {

  async createCompany(request, response) {

    const company = request.body;
  
    try{        
        const result = await companyRepo.addCompany( company );
        return response.status(201).json(result)
  
    }catch(erro){
        const  { errors  } = erro
        console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findAllEmail( request, response ) {

    try{

      const result = await emailRepo.findAll();
      return response.status( 201 ).json( result );

    }catch( e ){

      console.log(e)

    }

  }

  async createEmail( request, response ) {

    const email = request.body;
  
    try{    

        const result = await emailRepo.createEmail( email );
        return response.status(201).json( result )
  
    }catch( erro ){

        const  { errors  } = erro
        console.log(erro)
        return response.status(500).json({"erro" : erro})

    }
  
  }

  async updateCompany(request, response) {

    const company = request.body;
  
    try{
      
        const result = await companyRepo.updateCompany( company );
        if( result ){
          return response.status( 201 ).json( { "result" : company } )
        }else{
          return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
        }
  
    }catch(erro){

        return response.status(500).json({"erro" : "Not Exits Or Data Invalid" });

    }
  
  }

  async getAllCompany( request, response ) {
  
    try{

      const result = await companyRepo.findAll()
      return response.status(201).json( { result } )
  
    }catch(erro){

      const  { errors  } = erro
      console.log(erro)
      return response.status(500).json( { "erro" : erro } )

    }

  }

  async getCompanyId( request, response ) {

    const { id } = request.query;
    console.log(id)
  
    try{

      const result = await companyRepo.findCompanyId( id )
      return response.status(201).json( { result } )
  
    }catch(erro){

      const  { errors  } = erro
      console.log(erro)
      return response.status(500).json( { "erro" : erro } )

    }

  }

}
