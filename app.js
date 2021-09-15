const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/key').MongoURI;

// Connect to MongoDB
mongoose
  .connect(db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connecting......Connected!'))
  .catch(err => console.log(err));

// static Files 
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/img',express.static(__dirname+'public/img'));

// EJS
// app.use(expressLayouts);
app.set('views','views');
app.set('view engine','ejs');
// views directory and not view 

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'Innerve-tc',
    resave: true,
    saveUninitialized: true
  })
);

// passport.use(User.createStrategy());
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

