let express = require('express');
let router = express.Router();

let loggedIn = require('../lib/middleware/logged-in');
// let NotificationService = require('../lib/notification')([
// 	{
// 		pattern: 'forgot-password/:id',
// 		handler: 'forgot-password'
// 	}
// ], path.join(config.rootPath, 'views', 'notifications'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express / React Template',
		user: req.user
	});
});

router.get('/pandas', function(req, res) {
	console.log('You got to the pandas page');
	res.render('pandas', {
		names: [
			'red panda',
			'cute panda',
			'baby panda',
			'amanda panda'
		]
	});
	// res.end('["red panda"]');
	// res.json();
});

router.get('/dashboard', loggedIn, function(req, res, next) {
	res.render('dashboard', {
		title: 'User Dashboard'
	});
});

module.exports = router;
