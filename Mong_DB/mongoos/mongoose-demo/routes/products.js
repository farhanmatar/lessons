// var express = require('express');
// var router = express.Router();
// let Product=require("../models/Product");

// /* GET products listing.*/
// router.put('/:prouductId',async function(req, res, next){
//   let  prouductId = req.params.prouductId;
//   try{
//     const products=await Product.findById(prouductId);
//     res.status(200).send(products);

//   }catch(e){
//     next(e);
//   }
// });

// module.exports = router;



var express = require('express');
  var router = express.Router();
  var Product = require('../models/Product');
  /* GET products listing. */
router.get('/', async function(req, res, next) {
    // res.send('respond with a resource');
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (e) {
      next(e);
    }
});
  // GET http://localhost:3000/products/5e15bf6ce865442fc8748e2d
router.get('/:productId', async function(req, res, next) {
    // res.send(req.params.productId);
    let productId = req.params.productId;
    try {
      const products = await Product.findById(productId);
      res.status(200).send(products);
    } catch (e) {
      next(e);
    }
  // then run in the browser loclahost url : localhost:3000/products/asdadas
  // it will retun what you write inside your url in the main Page
});
  // update info for a particular product
  // PUT http://localhost:3000/products/5e15bf6ce865442fc8748e2d?name=
router.put('/:productId', async function(req, res, next) {
    // res.send(req.params.productId);
    let productId = req.params.productId;
    let name=req.query.productId;
    let price=req.query.price;
    try {
      const products = await Product.findByIdAndUpdate(productId,{
        name:name,
        price:price
      });
      res.status(200).send(products);
    } catch (e) {
      next(e);
    }
});
module.exports = router;