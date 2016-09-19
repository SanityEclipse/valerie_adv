var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

/* GET home page. */
router.get('/', getIndexPage);           //Abstract routers implemented- functions are below
router.get('/posts/:id', showSinglePost);

function getIndexPage(req, res, next) {
  res.render('index', {title: 'Express'});
}

function showSinglePost(req, res, next){
  queries.getSinglePost(req.params.id)
  .then(function(data){
    res.render('index', {
      data: data[0]
    })
  })
})

module.exports = router;
