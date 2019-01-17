const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/test', productController.test);
router.post('/save', productController.save);
router.post('/update/', productController.update);
router.delete('/delete/:id', productController.delete);
router.post('/getById', productController.getById);
router.post('/getByTitle', productController.getByTitle);
router.post('/getByCallory', productController.getByCallory);
router.get('/getAll', productController.getAll);
module.exports = router;