const  express  =  require('express'); //Step 2
const  router  =  express.Router(); //Step 2
const  low  =  require('lowdb') //Step 3
const  FileSync  =  require('lowdb/adapters/FileSync') //Step 3
const  adapter  =  new  FileSync('data/data.json')//Step 4
const  db  =  low(adapter) //Step 5

let data = db.get('list');

router.get('/',function(req,res,next){
    res.json(data);

});
router.post('/post',function(req,res,next){
  // let  id=list.__wrapped__.list.length;
  let id = parseInt(req.body.id);
  let fname = req.body.fname;
  let lname = req.body.lname;


db.get('list').push({
    id:id,
    fname:fname,
    lname:lname

 }).write();

  //  res.status(200).send('it have been already posted')
   res.redirect('/')
  });

  // delete//////////////////////////////

   router.post('/delete',function(req,res){
  let id =parseInt(req.body.id);
   console.log(id)
  db.get('list').remove({id: id}).write();
  res.status(200).send('you have removed item ' + id);

}); 

module.exports = router;