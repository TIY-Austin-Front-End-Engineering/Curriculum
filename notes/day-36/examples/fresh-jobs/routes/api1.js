let express = require('express');
let router = express.Router();
let path = require('path');
let setCurrentUser = require('../lib/middleware/set-current-user');
let bookshelfApi = require('bookshelf-api')({
	path: path.join(__dirname, '../models')
});

router.post('/company', setCurrentUser, bookshelfApi);
router.post('/job', setCurrentUser, bookshelfApi);

router.use('/company', bookshelfApi);
router.use('/job', bookshelfApi);

// router.get('/products', function(req, res, next) {

// });

module.exports = router;
