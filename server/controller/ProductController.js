const models = require("../db/models");

//  RETORNA LISTA DE TUDOS OS PRODUTOS
const getProduct = async (req, res) => {
  try {
    const allProducts = await models.Products.findAll()
    return res.status(200).json(allProducts)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  RETORNA PRODUTO ESPECIFICO
const getProductId = async (req, res) => {
  try {
    const productid = req.params.productid
    const product = await models.Products.findAll({
      where: {
        id: Number(productid)
      }
    })
    return res.status(200).json(product)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  INSERE UM PRODUTO
const postProduct = async (req, res) => {
  try {
    const productParams = req.body
    const product = await models.Products.create(productParams);
    return res.status(200).json(product)
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

//  ALTERA UM PRODUTO  
const putProduct = async (req, res) => {

  try {
    const productid = req.params.productid
    const productParams = req.body
    await models.Products.update(productParams, {
      where: {
        id: productid
      }
    })
    res.status(200).send({
      mensagem: 'Produto alterado'
    })
  } catch (error) {
    console.log(error.message)
  }
}

//  EXCLUI UM PRODUTO 
const deleteProduct = async (req, res) => {

  try {
    const productid = req.params.productid
    await models.Products.destroy({
      where: {
        id: Number(productid)
      }
    });
    return res.status(200).send({
      mensagem: 'Produto apagado!'
    })
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

module.exports = { getProduct, postProduct, getProductId, putProduct, deleteProduct }

// {
// 	"name":"Brigadeiro",
// 	"price": 5.90,
// 	"image": "",
// 	"type":"Sobremesa",
// 	"subtype":"",
// 	"complement":"",
// 	"flavor":""
// }