


module.exports = class accountRepo {

    alunos = [ 
        { "name": "ze", "email": "ts@gmail.com"}, 
        { "name": "ze", "email": "ts@gmail.com"},
        { "name": "ze", "email": "ts@gmail.com"} 
    ]

    create(params) {
       
        this.alunos.push(params)
        return this.alunos
        
    }

    findAll(params) {
       
        return this.alunos
        
    }

}