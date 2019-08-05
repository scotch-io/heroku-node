var express = require('express');
var router = express.Router();

/*get signin page*/

router.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.render('signin');
});

module.exports = router;
