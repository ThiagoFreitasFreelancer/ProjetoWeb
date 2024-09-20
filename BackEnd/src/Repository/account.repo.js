


module.exports = class accountRepo {

    alunos = [  ]

    create(params) {
       
        this.alunos.push(params)
        return this.alunos
        
    }

    findAll(params) {
       
        return this.alunos
        
    }

    update(params) {
        
        console.log("veio")
        const Nome = params.name;
        console.log(Nome);
        let array = this.alunos.find(
          (elemente) => elemente.name === params.name,
          index
        );
        console.log(array)
        return array
        //this.array = params;
        //this.alunos.push()
        
    }

}