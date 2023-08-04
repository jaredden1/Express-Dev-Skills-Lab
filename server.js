var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); //middleware designed to process cookies
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
// app.set is used to configure apps
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use() is always used for middleware
app.use(logger('dev')); 
// log in the terminal the HTTP request info
app.use(express.json()); 
// processes data sent in the body of the request if its json
app.use(express.urlencoded({ extended: false })); 
//processes data sent in 'form' body of the request
app.use(cookieParser()); 
// add cookie property for each cookie sent in the request
app.use(express.static(path.join(__dirname, 'public'))); 
// if the request is for a static asset returns the file
app.use(methodOverride('_method'));

// The first arg starts with path
// The paths within the route modules are combined to the starts with paths
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
