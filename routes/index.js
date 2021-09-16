const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load User model
const User = require('../models/User');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Homepage
router.get('/', forwardAuthenticated, (req,res)=> res.render('homepage'));
router.get('/about',(req,res)=> res.render('aboutpage'));
router.get('/hinstruction',(req,res)=> res.render('instructionpage'));
router.get('/ginstruction',(req,res)=> res.render('gameinstructionpage'));

// Login page
router.get('/login', forwardAuthenticated, (req, res) => res.render('loginpage'));

router.get('/bonus1',(req,res)=>{
  if(req.body.answer===4)
  armySize+=100;
  User.findOneAndUpdate({username:username},{armySize: armySize});
  res.render('/game',{hidden:'hidden'});
})
router.get('/bonus2',(req,res)=>{
  if(req.body.answer===4)
  armySize+=100;
  User.findOneAndUpdate({username:username},{armySize: armySize});
  res.render('/game',{hidden:'hidden'})
})
router.get('/bonus3',(req,res)=>{
  if(req.body.answer===4)
  armySize+=100;
  User.findOneAndUpdate({username:username},{armySize: armySize});
  res.render('/game',{hidden:'hidden'})
})
//Game page

router.get('/game',  (req, res) =>
  res.render('game', {
    hidden:'',
    user: req.user,
    armySize:User.armySize
  })
);

// Post 
// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/game',
        failureRedirect: '/login'
        // failureFlash:true
    })(req, res, next);
});

router.post('/game',(req,res)=>{
    const username= req.body.username;
});
// Logout
router.get('/endpage', (req, res) => {
    req.logout();
    res.redirect('endpage');
});

module.exports = router;