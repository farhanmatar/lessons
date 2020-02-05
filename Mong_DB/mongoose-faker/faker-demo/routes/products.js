let express = require('express');
let router = express.Router();
let faker = require('faker');
let Product = require('../models/Product');



/* GET users listing. */
router.get('/',async function(req, res, next) {
    try {
        const products = await Product.find();
        res.status(200).send(products);
      } catch (e) {
        next(e);
      }
});
router.get('/add' , (req,res,next)=>{
    for (let index = 0; index < 10; index++) {
        let newProduct = new Product({ name: faker.commerce.product(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            description: faker.lorem.paragraph()})

        newProduct.save(function (err , result){
            if(err) return console.error(err);
            
    
        })
        
    }
   
    res.send('<h3> 10 products inserted </h3>');
   
})
module.exports = router;


