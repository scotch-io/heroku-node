var express = require('express');
var router = express.Router();


// set the home page route
router.get('/', function(req, res, next) {
	// ejs render automatically looks in the views folder
	res.render('index');
});

module.exports = router;
