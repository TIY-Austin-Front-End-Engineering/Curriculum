var express = require('express');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var router = express.Router();

/* GET home page. */
router.get(
	'/',
	function(req, res, next) {
	  // res.render('index', { title: 'The Internets' });
	  console.log('product home');
	  res.json([
	  	{
	  		id: 1,
	  		name: 'Suglasses',
	  		price: 16.99
	  	},
	  	{
	  		id: 2,
	  		name: 'Hat',
	  		price: 22.00
	  	},
	  	{
	  		id: 3,
	  		name: 'Shoes',
	  		price: 58.22
	  	}
	  ]);
	  next();
	},
	function(req, res, next) {
		console.log('hello');
	}
);

router.post('/email', function(req, res, next) {
	// console.log(req.body);
	var auth = {
	    auth: {
	        api_key: 'key-1ab8478b364f33a616c439e170784cba',
	        domain: 'sandbox567a0d06d1af48de8a7d1267f526f350.mailgun.org'
	    }
	};

	var transporter = nodemailer.createTransport(mg(auth));

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Tiyfe Austin <tiyfeaustin@gmail.com>', // sender address
	    to: req.body.to, // list of receivers
	    subject: 'Hello', // Subject line
	    text: req.body.message, // plaintext body
	    html: req.body.message // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	res.status(400).json({success: false});
	        return console.log(error);
	    }
	    res.json({success: true});
	    // console.log('Message sent: ' + info.response);
	    console.log(info);

	});
});

module.exports = router;
