module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	//Uses index.render to respond to requests to the root path
	app.get('/', index.render);
}