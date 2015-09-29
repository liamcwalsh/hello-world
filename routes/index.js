var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // this renders views/index.ejs and passes the following data object
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

router.get('/D3',function(req,res,next){res.render('D3', {title:'D3 Experiment'});});

router.get('/discrete_choice',function(req,res,next){
	res.render('discrete_choice',{title:'Discrete Choice Model Optimization'});})

router.get('/opt_approx',function(req,res,next){
	res.render('opt_approx',{title:'Approximation of the Lambert W Function'});});

router.get('/no_boot',function(req,res,next){
	res.render('no_boot');});

router.get('/graph',function(req,res,next){
	res.render('graphpage');});

router.get('/navbar',function(req,res,next){
	res.render('navbar');});

router.get('/svg_exp',function(req,res,next){
	res.render('svg_exp',{title: 'SVG Examples'});});

router.get('/barchart',function(req,res,next){
	res.render('barchart',{title: 'SVG Barchart'});});

router.get('/scatter',function(req,res,next){
	res.render('scatterplot',{title: 'SVG Scatter'});});

router.get('/tooltipex',function(req,res,next){
	res.render('tooltipex',{title: 'ToolTip Demo'});});

router.get('/about',function(req,res,next){
	res.render('about',{title: 'About'});});
