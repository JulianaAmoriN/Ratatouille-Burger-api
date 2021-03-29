const { Router } = require('express');
const userController = require('../controller/UserController');

const router = Router();

router.get('/', userController.getUser);
router.post('/', userController.postUser);
router.get('/:userid', userController.getUserId);
router.put('/:userid', userController.putUser);
router.delete('/:userid', userController.deleteUser);

module.exports = router;