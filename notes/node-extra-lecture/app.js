var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

var greetings [];
fs.readFile('./data.json', function(err, data) {
  greetings = JSON.parse(data);
});

app.use('/goodbye', function(req, res, next) {
  res.json({
    message: 'farewell'
  });
});

app.post('/login', function(req, res, next) {
  var isLoginCorrect = false;
  if(req.body.username === 'aaron@theironyard.com' && req.body.password === 'password123') {
    isLoginCorrect = true;
  }

  res.json({
    isAuthenticated: isLoginCorrect
  });
});

app.get('/', function(req, res, next) {
  res.json(greetings);
});

app.post('/', function(req, res, next) {
  greetings.push(req.body);
  fs.writeFileSync('./data.json', JSON.stringify(greetings));
  res.json(req.body);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
