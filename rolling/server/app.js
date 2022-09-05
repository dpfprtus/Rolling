var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors'); /* cors설정*/
var mongoose = require('mongoose');
var {PORT,MONGO_URI} = process.env;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Mongo DB server 연결
mongoose.connect(
  "mongodb://localhost:27017/",
   // MongoDB url
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
// mongoose의 connection 메소드를 변수 db에 할당
const handleOpen = () => {
    console.log(`✅ Connected to DB`);
}
const handleError = (e) => {
    console.log(`❌ Error on DB connection: ${e}`);
};
db.once("open", handleOpen);
// db 연결 성공 시 handleOpen 함수 실행.
db.on("erroe", handleError);


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
