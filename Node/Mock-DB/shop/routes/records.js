var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter= new FileSync('data/db.json');
const db = low(adapter);

let data = db.get('records');

//defult 
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //let data = db.get('records')
  res.status(200).send(data);
});

//GET particular record using id 
router.get('/:id', function(req, res,){
 //filtering
 let item =data.filter(function (i) {
  //  return item.id == req.params.id;
  if(i.id == req.params.id){ 
    return true;
  }
 });

 res.status(200).send(item);
});

//POST new record
router.post('/',function(req,res){
  let id = data.__wrapped__.records.length +1;
  let title = req.body.title;
  let price = req.body.price;
  console.log(title);
  console.log(price);
  let  count = db.get('count');//
  console.log(id);

  //check if any item with such title and price already exists
let array_titles=db.get('records').map('title').value()
let duplicated= false
// check that the new title is not duplicated
array_titles.forEach(item =>{
  if(item === title){
  duplicated = true 
  }
})
if(duplicated === false){

}
db.update('count', n => n + 1)
.write()

db.get('records').push({
   id:id,
  title:title,
  price:price
}).write();
 res.status(409).send('already exists')
});

  //let id = data.records.length ;
/*   let length = data.__wrapped__.records.length;
  let records = data.__wrapped__.records;
  for (let i = 0; i < length; i++) {
    console.log(records[i]);
    if(records[i].title == title) {
      res.status(409).send('already exists');
    }
    else {
      //
    }
} */
//});
  //Increment count



//delete new record
router.post('/delete',function(req,res){
  let id = parseInt(req.body.id);
  console.log(id)
  //delete count

  db.get('records').remove({id:id}).write();
  res.status(200).send('database has been deleted from OTTO collection'+id)
});

module.exports = router;
