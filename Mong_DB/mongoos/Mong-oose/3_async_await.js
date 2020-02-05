const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true});

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});



// NOTE: methods must be added to the schema before compiling it with mongoose.model()
productSchema.methods.logMessage = function () {
  let msg = `The product ${this.name} with price the ${this.price} has beed saved`;
  console.log(msg);
}

let Product = mongoose.model('Product', productSchema);

let newProduct = new Product({ name: 'Sony Ericson', price: 599.99 });
console.log(newProduct.name);  
console.log(newProduct.price);





let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));





// saving documents
db.once('open', async function() {
  console.log("we're connected to the localhost!");
 
  //save samsung async function
    try{
        const product=new Product(newProduct);
        await product.save();
        await console.log('save all Products in Localost...');
        
        // find all products
        await console.log('starting search for the Products...');
        const found_products=await Product.find();
        await console.log(JSON.stringify(found_products,null,4));
        await console.log('End search session...');


        //find by id
        await console.log('starting search for the Products by ID...');
        const find_product_byId= await Product.findById("5e15b64a05d85f2b594bf10d");
        await console.log(JSON.stringify(find_product_byId,null,4));
        await console.log('Ending the  search for  Products by ID...');


        //remove Products
        await console.log(' start removing a Product...');
        const remove_products=await Product.remove({_id:'5e15b64a05d85f2b594bf10d'});
        await console.log(JSON.stringify(remove_products,null,4));


    }catch(e){
        console.log(e);
    }
    db.close();
});