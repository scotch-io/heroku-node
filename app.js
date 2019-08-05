var express = require('express');
var path = require('path');

var server = require('./routes/server');
var signin = require('./routes/signin');

var app = express();

// view engine set up

var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/', server);
app.use('/signin', signin);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
