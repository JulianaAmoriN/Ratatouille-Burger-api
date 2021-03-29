const { Router } = require('express');
const productController = require('../controller/ProductController');

const router = Router();

router.get('/', productController.getProduct);
router.post('/', productController.postProduct);
router.get('/:productid', productController.getProductId);
router.put('/:productid', productController.putProduct);
router.delete('/:productid', productController.deleteProduct);

module.exports = router;