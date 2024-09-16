const { Purchase_sale } = require("../../Database/models");

class purchaseRepository{

  async findAllLimit(limit = 10, base = 0){

    return await Purchase_sale.findAll({

      limit: limit,
      offset: base
      
    });

  }

  async findAll(){

    return await Purchase_sale.findAll();

  }

  async findPurchase(id){

    return await Purchase_sale.findOne({
      where:{
        id : id
      }
    })
  }

  

  async addPurchase(purchase) {
  
    const {
      nameproduct,
      amount_product,
      value_product,
      id_account,
      id_company_purchase,
      date_purchase,
      product_description
     } = purchase
  
    await Purchase_sale.create({

      nameproduct,
      amount_product,
      value_product,
      id_account,
      id_company_purchase,
      date_purchase,
      product_description

    });
  }
 
  async updatePurchase(purchase) {
    
    await Purchase_sale.update(
      {
        nameproduct: purchase.nameproduct ? purchase.nameproduct : Purchase_sale.nameproduct,
        amount_product: purchase.amount_product ? purchase.amount_product : Purchase_sale.amount_product,
        value_product: purchase.value_product ? purchase.value_product : Purchase_sale.value_product,
        id_account: purchase.id_account ? purchase.id_account : Purchase_sale.id_account,
        id_company_purchase: purchase.id_company_purchase ? purchase.id_company_purchase : Purchase_sale.id_company_purchase,
        date_purchase: purchase.date_purchase ? purchase.date_purchase : Purchase_sale.date_purchase,
        product_description: purchase.product_description ? purchase.product_description : Purchase_sale.product_description
      },
      {
        where: {
            id: purchase.id,
        },
    });
  }

  async deletePurchase( id ) {

    await Purchase_sale.delete({

      where: {
        id : id
      }

    })

  }
    
}

module.exports = purchaseRepository;