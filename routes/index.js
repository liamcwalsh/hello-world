var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anna Karenina' });
});

module.exports = router;


/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'My codez' });
});
