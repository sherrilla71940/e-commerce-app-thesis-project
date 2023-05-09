const express = require('express');
const router = express.Router();
const productController = require('./Controller/productController')

router.get('/products', productController.getProducts)

router.get('/products/:id', productController.getItem)


export default router;