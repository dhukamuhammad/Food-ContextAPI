const express = require('express');
const router = express.Router();
const product = require('../controller/product')

router.get("/getproduct", product.getproduct);

module.exports = router;