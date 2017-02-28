//Dependency Injection
var express = require('express');
var bodyParser = require('body-parser');

//Exposed module
module.exports = function() {
	//Initializes express application
	var app = express();

	//Settings for bodyParser
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	//Set bodyParser to read json
	app.use(bodyParser.json());

	//Enable tempating with ejs
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	//require routing file and pass the application instance through it.
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);

	//Set location of static assets
	app.use(express.static('./public'));

	return app;
}