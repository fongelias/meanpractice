//Dependency Injection
/*None*/

//Exposed module
exports.render = function(req, res) {
	//Test string. This should show the following string as the destination of the root
	//res.send('Howdy World');

	res.render('index', {
		title: 'Howdy World'
	})
}