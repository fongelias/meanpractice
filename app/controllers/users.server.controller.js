var User = require('mongoose').model('User');

//Takes a json object and saves it as a new user
/* Example:
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "Kevin", "email": "kevin@mitnick.com", "username": "Condor", "password": "AintNoBodyGotTimeForGoodPa$words!!!"}' localhost:1337/users
*/
exports.create = function(req, res, next) {
	var user = new User(req.body);
	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	})
}


//Lists all existing users
exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	})
}


//Returns JSON representation of req.user object. 
exports.read = function(req, res) {
	res.json(req.user);
}


//Populates req.user object, used as middleware 
exports.userByID = function(req, res, next, id) {
	User.findOne({
			_id: id
		},
		function(err, user) {
			if (err) {
				return next(err);
			} else {
				req.user = user;
				next();
			}
		}
	);
};


//Updates user by ID
/* Example:
curl -X PUT -H "Content-Type: application/json" -d '{"name": "UpdatedName"}' localhost:1337/users/[_id]
*/
exports.update = function(req, res, next) {
	User.findByIdAndUpdate(req.user.id, req.body, function(err,user) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	})
}





