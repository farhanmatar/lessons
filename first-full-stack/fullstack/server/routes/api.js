var express = require('express');
var router = express.Router();
const MovieReview = require('../models/MovieReview')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let ReviewList = await MovieReview.find();

  res.send(ReviewList);
});

router.post('/newReview',(req,res,next)=>{
  let {little,rating,comment}=req.body;

  let newReview = new MovieReview({
    title:title,
    rating:parseInt(rating),
    comment:comment
  })
  newReview.save()
  .then(response=>{
    console.log(response)
    res.send({msg:'done'})
  })
  .catch(err=>{
    console.log(err)
    res.send({msg:err})
  })
})

router.delete('/deleteMovie', async (req,res,next)=>{
  let id = req.body.id
  await MovieReview.findByIdAndDelete({id:id})
  .then(response =>{
    res.send({msg: 'Movie Review Deleted'})
  })
  .catch( err=>{
    res.send({msg: err})
  })
})

module.exports = router;
