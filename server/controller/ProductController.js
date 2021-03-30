//  RETORNA LISTA DE TUDO
const getProduct = (req, res) => {
    res.send({
        mensagem: 'Retorna lista de produtos'
    });
}

//  INSERE UM PRODUTO
const postProduct = (req, res) => {

    // const product = {
    //     name: req.body.name,
    //     preco: req.body.preco
    // };

    res.send({
        mensagem: 'O produto foi criado',
        produtoCriado: product
    });
}

//  RETORNA PRODUTO ESPECIFICO
const getProductId = (req, res) => {
    const productid = req.params.productid
    res.send({
        mensagem: 'Detalhes do produto',
        productid: productid
    });
}

//  ALTERA UM PRODUTO  
const putProduct = (req, res) => {
    const productid = req.params.productid
    res.send({
        mensagem: 'Produto alterado',
        productid: productid
    });
}

//  EXCLUI UM PRODUTO 
const deleteProduct = (req, res) => {
    const productid = req.params.productid
    res.send({
        mensagem: 'Produto excluído',
        productid: productid
    });
}

module.exports = { getProduct, postProduct, getProductId, putProduct, deleteProduct }