const { Router } = require("express");
const rota = Router()
const ProductController = require("../Controller/product.controller");
const productcontroller = new ProductController()

//OK
// async function verifyIfExistsProductId(request, response, next){

//     const  product  = request.body;

//     try{

//         const result = await productcontroller.findProductExist(product);
//         if(!result){

//             return response.status(500).json({"erro" : "Not Found"})

//         }        

//         return next();

//     }catch(erro){

//         return response.status(400).json({ "error": erro});

//     }    

// }
//Adicionar um produto
rota.post("/product", async (request, response) => {  await productcontroller.addProduct( request, response ); });
//Editar um produto
rota.put("/product", async (request, response) => { await productcontroller.updateProduct( request, response ); });
//Buscar todos os produtos
rota.get("/products", async (request, response) => { await productcontroller.findAll( request, response ); });
//Buscar um produtos
rota.get("/product", async (request, response) => { await productcontroller.findProduct( request, response ); });
//Deletar um produto
rota.delete("/product", async (request, response) => { await productcontroller.deleteProduct( request, response ); });

module.exports = rota