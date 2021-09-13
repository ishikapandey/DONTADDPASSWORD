const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB configured
const db = require('./config/key').MongoURI;

// Connect to database
mongoose.connect(db,{ useNewUrlParser:true })
.then(()=>console.log('MongoDb connecting.... connected!'))
.catch(err=>console.log(err));

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

// BodyParser 
app.use(express.urlencoded({ extended:false}));

// app.get('/',(req,res)=>{
// res.render('homepage');
// });

// Routes
app.use('/',require('./routes/index'));
app.use('/login',require('./routes/users'));

const PORT = process.env.PORT || 3000; 
// for when we deploy 

app.listen(PORT,console.log(`Server started on ${PORT}`));

