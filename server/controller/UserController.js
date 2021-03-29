//  RETORNA LISTA DE TUDO
const getUser = (req, res) => {
    res.send({
        mensagem: 'Retorna lista de users'
    });
}

//  INSERE UM USER
const postUser = (req, res) => {
    res.send({
        mensagem: 'O user foi criado'
    });
}

//  RETORNA USER ESPECIFICO
const getUserId = (req, res) => {
    const userid = req.params.userid
    res.send({
        mensagem: 'Detalhes do user',
        userid: userid
    });
}

//  ALTERA UM USER
const putUser = (req, res) => {
    const userid = req.params.userid
    res.send({
        mensagem: 'User foi alterado',
        userid: userid
    });
}

//  EXCLUI UM USER
const deleteUser = (req, res) => {
    const userid = req.params.userid
    res.send({
        mensagem: 'User excluído',
        userid: userid
    });
}

module.exports = { getUser, postUser, getUserId, putUser, deleteUser }