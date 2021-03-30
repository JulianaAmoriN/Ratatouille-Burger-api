//  RETORNA LISTA DE TUDO
const getOrder = (req, res) => {
    res.send({
      mensagem: 'Retorna lista de oredens'
    });
  }
  
  //  INSERE UM PEDIDO
  const postOrder = (req, res) => {

    // const order = {
    //   id_produto: req.body.id_produto,
    //   qtd: req.body.qtd
    // }

    res.send({
      mensagem: 'A ordem foi criada',
      orderCriada: order
    });
  }
  
  //  RETORNA PEDIDO ESPECIFICO
  const getOrderId = (req, res) => {
    const orderid = req.params.orderid
    res.send({
        mensagem: 'Detalhes da ordem', 
        orderid: orderid
    });
  }
  
  //  ALTERA UMA ORDEM 
  const putOrder = (req, res) => {
    const orderid = req.params.orderid
    res.send({
      mensagem: 'Ordem alterada', 
      orderid: orderid
    });
  }
  
  //  EXCLUI UM PEDIDO
  const deleteOrder = (req, res) => {
    const orderid = req.params.orderid
    res.send({
      mensagem: 'Ordem excluída', 
      orderid: orderid
    });
  }
  
  module.exports = { getOrder, postOrder, getOrderId, putOrder, deleteOrder }