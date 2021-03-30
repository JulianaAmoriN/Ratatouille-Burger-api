const models = require("../db/models");

//  RETORNA LISTA DE TUDOS OS PRODUTOS
const getProduct = async (req, res) => {
  try {
    const allProducts = await models.Product.findAll()
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
    const product = await models.Product.findAll({
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
    const product = await models.Product.create(productParams);
    return res.status(201).json(product)
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
    await models.Product.update(productParams, {
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
    await models.Product.destroy({
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