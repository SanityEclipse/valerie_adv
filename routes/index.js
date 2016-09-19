var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts/:id', function (res,req,next){
  queries.getSinglePost(req.params.id);
  .then(function(data){
    res.render('index', {
      data: data[0]
    })
  })
})

module.exports = router;
