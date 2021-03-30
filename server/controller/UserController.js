const models = require("../db/models");

//  RETORNA LISTA DE TUDOS USERS 
const getUser = async (req, res) => {
  try {
    const allUsers = await models.Users.findAll()
    return res.status(200).json(allUsers)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  RETORNA USER ESPECIFICO
const getUserId = async (req, res) => {
  try {
    const userid = req.params.userid
    const user = await models.Users.findAll({
      where: {
        id: Number(userid)
      }
    })
    return res.status(200).json(user)
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

//  INSERE UM USER
const postUser = async (req, res) => {
  try {
    const userParams = req.body
    const user = await models.Users.create(userParams);
    return res.status(201).json(user)
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

//  ALTERA UM USER
const putUser = async (req, res) => {
  try {
    const userid = req.params.userid
    const userParams = req.body
    await models.Users.update(userParams, {
      where: {
        id: userid
      }
    })
    res.status(200).send({
      mensagem: 'User alterado com sucesso!'
    })
  } catch (err) {
    console.log(err.message)
  }
}

//  EXCLUI UM USER
const deleteUser = async (req, res) => {
  try {
    const userid = req.params.userid
    await models.Users.destroy({
      where: {
        id: Number(userid)
      }
    });
    return res.status(200).send({
      mensagem: 'User apagado!'
    })
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

module.exports = { getUser, postUser, getUserId, putUser, deleteUser }