const models = require("../db/models");

//  RETORNA LISTA DE TUDO
const getOrder = async (req, res) => {
  try {
    const allOrders = await models.Orders.findAll()
    return res.status(200).json(allOrders)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  RETORNA PEDIDO ESPECIFICO
const getOrderId = async (req, res) => {

  try {
    const orderid = req.params.orderid
    const order = await models.Orders.findAll({
      where: {
        id: Number(orderid)
      }
    })
    return res.status(200).json(order)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  INSERE UM PEDIDO
const postOrder = async(req, res) => {
  try {
    const orderParams = req.body
    const order = await models.Orders.create(orderParams);
    return res.status(200).json(order)
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

//  ALTERA UMA ORDEM 
const putOrder = async (req, res) => {
  try {
    const orderid = req.params.orderid
    const orderParams = req.body
    await models.Orders.update(orderParams, {
      where: {
        id: orderid
      }
    })
    res.status(200).send({
      mensagem: 'Ordem alterada'
    })
  } catch (error) {
    console.log(error.message)
  } 
}

//  EXCLUI UM PEDIDO
const deleteOrder = async (req, res) => {
    try {
      const orderid = req.params.orderid
      await models.Orders.destroy({
        where: {
          id: Number(orderid)
        }
      });
      return res.status(200).send({
        mensagem: 'Ordem apagada!'
      })
    } catch (error) {
      res.json({
        message: error.message,
      })
    }
}

module.exports = {
  getOrder, getOrderId, postOrder, putOrder, deleteOrder
}

// {
// 	"user_id": 1,
// 	"client_name": "Gastor",
// 	"table":1,
// 	"status":""
// }