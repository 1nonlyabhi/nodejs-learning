const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const { products } = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', products)
  res.render('shop', {
    pageTitle: 'Shop',
    path: '/',
    prods: products
  });
});

module.exports = router;
