const bkrypt = require('bcryptjs');
const accountRepository = require("../Repository/account.repo");
const repo = new accountRepository()

module.exports = class accountController {

  async createAccount(request, response) {

    const account = request.body;
  
    try{        
        //const result = await accountRepo.addAccount( account );
        if( account != null ){

          const result = repo.create(account);
          return response.status(201).json({ "result" : result })
        }else{
          return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){

      console.log(erro)
        return response.status(500).json({"erro" : erro})
    }
  
  }

  async findAll( request, response ) {

    try{

      const result = await emailRepo.findAll();
      return response.status( 201 ).json( result );

    }catch( e ){

      console.log(e)

    }

  }

  async updateAccount( request, response ) {

    const account = request.body;
  
    try{        
        const result = await accountRepo.updateAccount( account );
        if( result ){
          return response.status( 201 ).json( { "result" : account } )
        }else{
          return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
        }
  
    }catch( erro ){

        return response.status( 400 ).json({"erro" : "Not Exits Or Data Invalid"});
    }
  
  }

  async deleteAccountId(request, response) {

    const { id } = request.query;
  
    try{        
        const result = await accountRepo.deleteAccountId( id );
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){

        return response.status(500).json({"erro" : erro})
    }
  
  }

  async getAllAccount( request, response ) {
  
    try{

      const result = await repo.findAll()
      return response.status(201).json( { result } )
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }

}
