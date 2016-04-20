let express = require('express');
let router = express.Router();


// START: Setup Step 2
let bookshelfApi = require('bookshelf-api');
let path = require('path');
let configuredApi = bookshelfApi({
	path: path.join(__dirname, '..', 'models')
});

router.use('/', configuredApi);
// END: Setup Step 2

// router.get('/products', function(req, res, next) {

// });

router.get('/panda', function(req, res) {
	res.json([
		{
			id: 1,
			name: 'amanda',
			age: 2,
			type: 'red'
		},
		{
			id: 2,
			name: 'fred',
			age: 1,
			type: 'baby'
		},
		{
			id: 3,
			name: 'george',
			age: 7,
			type: 'adult'
		}
	]);
});

module.exports = router;
