const models = require("../db/models");

//RETORNA LISTA DE TUDO
const getOrder = async (req, res, next) => {
  try {
    let resultOrders = await models.Orders.findAll({
      order: [['id', 'ASC']],
      include: [{
        model: models.Products,
        as: 'Products',
        attributes: [
          'id', 'name', 'price', 'image', 'type', 'subtype', 'complement', 'flavor'
        ],
        through: {
          model: models.ProductsOrders,
          as: 'qtd',
          attributes: ['qtd']
        }
      }]
    });
    resultOrders = JSON.parse(JSON.stringify(resultOrders));

    return res.status(200).json(resultOrders)
    } catch (err){
      next(err)
    } 
}

//  RETORNA PEDIDO ESPECIFICO
const getOrderId = async (req, res, next) => {

  try {
    let findId = await models.Orders.findOne({
      where: {id: req.params.orderid },
      include: [{
        model: models.Products,
        as: 'Products',
        attributes: [
          'id', 'name', 'price', 'image', 'type', 'subtype', 'complement', 'flavor'
        ],
        through: {
          model: models.ProductsOrders,
          as: 'qtd',
          attributes: ['qtd']
        }
      }]
    })
    
    findId = findId.toJSON(findId)
    return res.status(200).json(findId)
    } catch (err){
      next(err);
    }
}


//  INSERE UM PEDIDO
const postOrder = async (req, res, next) => {
  const { user_id, client_name, table, products } = req.body;
  
  products.map(async (item) => {
    const product = await models.Products.findByPk(item.id);
    console.log(product)
    if (!product) {
      return res.status(404).json({ "error": "product doesn't exist"})
    }
  });
  
  try {
    const orderCreated = await models.Orders.create(req.body)
    req.body.products.map(async(item) => {
      const productOrder = {
        order_id: orderCreated.id,
        product_id: item.id,
        qtd: item.qtd
      }
      await models.ProductsOrders.create(productOrder);
    })
    console.log(orderCreated)
    return res.status(201).json(orderCreated);
  } catch(err){
    next(res.status(400).json({ error : err.message }));
    
  }
}

//  ALTERA UMA ORDEM 
const putOrder = async (req, res,next) => {
  try {
    const orderid = req.params.orderid
    const orderParams = req.body
    const order = await models.Orders.update(orderParams,
      {
        where:
        { id: Number(orderid) }
      } 
    )
    return res.json(order);
  } catch(err) {
    next(err);
  }
}

//  EXCLUI UM PEDIDO
const deleteOrder = async (req, res) => {
    try {
      const orderid = req.params.orderid
      await models.ProductsOrders.destroy({
        where: 
        { order_id: orderid }
      });
      await models.Orders.destroy({
        where: 
        { id: orderid }
      })
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