const accountRepository  = require("../Modules/Repositories/account.repository.js");
const emailRepository = require("../Modules/Repositories/email.repository.js");
const hariRepository = require("../Modules/Repositories/hair.repository.js");
const typeAccountRepository = require("../Modules/Repositories/type_account.repository.js");
const bkrypt = require('bcryptjs');
const hariRepo = new hariRepository();
const accountRepo = new accountRepository();
const emailRepo = new emailRepository();
const typeAccountRepo = new typeAccountRepository();

module.exports = class accountController {

  async createHair( request, response){

    const hair = request.body;

    try {
      
      const result = await hariRepo.addHair( hair );
      return response.status(201).json(result)

    } catch (erro) {
      
      return response.status(500).json({"erro" : erro})
      
    }

  }

  async getAllHair( request, response ){

    try {
      
      const result = await hariRepo.findAll();
      return response.status(201).json(result)

    } catch (erro) {

      return response.status(500).json({"erro" : erro})
      
    }

  }

  async createAccount(request, response) {

    const account = request.body;
  
    try{        
        const result = await accountRepo.addAccount( account );
        if( result ){
               
          await this.createEmail( result )

          return response.status(201).json({ "result" : result })
        }else{
          return response.status(400).json({ "result" : "something is wrong" })
        }
  
    }catch(erro){

        return response.status(500).json({"erro" : erro})
    }
  
  }

  async createTypeAccount(request, response) {

    const typeAccount = request.body;
  
    try{        
        const result = await accountRepo.addTypeAccount(typeAccount);
        return response.status(201).json(result)
  
    }catch(erro){

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

  async createEmail( emailAccount ) {

    let newEmailAccount = new Object();    
    newEmailAccount.account_id_email = emailAccount.id,    
    newEmailAccount.name = emailAccount.name,
    newEmailAccount.email = emailAccount.email,
    newEmailAccount.active = null
  
    try{    

        const result = await emailRepo.createEmail( newEmailAccount );
        if( result ){
          return
        }else{
          return response.status(400).json({ "result" : "something is wrong in email" })
        }
  
    }catch( erro ){

        return response.status(500).json({"erro" : erro})

    }
  
  }

  async findAccountLogin( email, password )  {

    try{  
        
        const eMail = await accountRepo.findEmail( email );

        if( eMail ){
              
          const results = bkrypt.compareSync( password, eMail.Account.dataValues.password );
          return results

        }

        return false;
  
    }catch( erro ){

      return 500;

    }
  
  }

  async updateTypeAccount( request, response ) {

    const typeAccount = request.body;
  
    try{        
        const result = await typeAccountRepo.updateTypeAccount( typeAccount );
        if( result ){
          return response.status( 201 ).json( { "result" : "Updated" } )
        }else{
          return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
        }
  
    }catch( erro ){

      console.log(erro)
      switch ( erro.parent.code ) {

        case "23503":

          return response.status(500).json({"erro" : "With relationship, cannot be removed" })
        
        default:

          return response.status(500).json({"erro" : erro })

          
      }

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

  async updateHair( request, response ) {

    const hair = request.body;
  
    try{        
        const result = await hariRepo.updateHair( hair );
        if( result ){
          return response.status( 201 ).json( { "result" : hair } )
        }else{
          return response.status( 400 ).json( { "result" : "Not Exits Or Data Invalid" } )
        }
  
    }catch( erro ){

        return response.status( 400 ).json({"erro" : "Not Exits Or Data Invalid"});
    }
  
  }

  async deleteHair( request, response ) {

    const { id } = request.query; 

    try{        
        const result = await hariRepo.deleteHair( id );
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){

        switch ( erro.parent.code ) {

          case "23503":

            return response.status(500).json({"erro" : "Hair with relationship, cannot be removed" })
          
          default:

            return response.status(500).json({"erro" : erro })

            
        }
        
    }
  
  }

  async deleteAccountCpf( request, response ) {

    const { cpf } = request.query; 

    try{        
        const result = await accountRepo.deleteAccountCpf( cpf );
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){

        return response.status(500).json({"erro" : erro })
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

  async deleteEmail(request, response) {

    const { id } = request.query;
  
    try{        
        const result = await emailRepo.deleteEmail( id );
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){

      switch ( erro.parent.code ) {

        case "23503":

          return response.status(500).json({"erro" : "Hair with relationship, cannot be removed" })
        
        default:

          return response.status(500).json({"erro" : erro })
          
      }
      
    }
  
  }

  async deleteTypeAccount(request, response) {

    const { id } = request.query;
  
    try{        
        const result = await typeAccountRepo.deleteTypeAccount( id );
        if( result ){
          return response.status(201).json({ "result" : "Removed" })
        }else{
          return response.status(400).json({ "result" : "Not Exits" })
        }
  
    }catch(erro){

      switch ( erro.parent.code ) {

        case "23503":

          return response.status(500).json({"erro" : "Hair with relationship, cannot be removed" })
        
        default:

          return response.status(500).json({"erro" : erro })
          
      }
      
    }
  
  }

  async getAllAccount( request, response ) {
  
    try{

      const result = await accountRepo.findAll()
      return response.status(201).json( { result } )
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }

  async getAllTypeAccount( request, response ) {
  
    try{

      const result = await typeAccountRepo.findAllTypeAccount()
      return response.status(201).json( { result } )
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } )

    }

  }
  
  async getAccountCpf( request, response ) {

    const { cpf } = request.query;
  
    try{

      const result = await accountRepo.findAccountCpf( cpf );
      if( result ){
        return response.status(201).json({ "result" : result })
      }else{
        return response.status(400).json({ "result" : "Not Exits Or Cpf Invalid" })
      }
  
    }catch(erro){

      return response.status(500).json( { "erro" : erro } );

    }

  }

}
