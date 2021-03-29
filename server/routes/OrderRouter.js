const { Router } = require('express');
const orderController = require('../controller/OrderController');

const router = Router();

router.get('/', orderController.getOrder);
router.post('/', orderController.postOrder);
router.get('/:orderid', orderController.getOrderId);
router.put('/:orderid', orderController.putOrder);
router.delete('/:orderid', orderController.deleteOrder);

module.exports = router;