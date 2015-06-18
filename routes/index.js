var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Liam\'s Blog' });
});

module.exports = router;


/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'My codez' });
});

router.get('/optimization',function(req,res,next){
	res.render('optimization', { title: 'Blog Post'});
});