var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
	//Post to '/users' to create a user, Get to get JSON for all users
	app.route('/users').post(users.create).get(users.list);
	//Get using request param 'userId' to retrieve JSON for one user
	//Put to update an existing user
	app.route('/users/:userId').get(users.read).put(users.update);

	//Request Params
	app.param('userId', users.userByID);
}