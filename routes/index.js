const express = require('express');
const router = express.Router();

//Homepage
router.get('/',(req,res)=> res.render('homepage'));
router.get('/about',(req,res)=> res.render('aboutpage'));
router.get('/hinstruction',(req,res)=> res.render('instructionpage'));
router.get('/ginstruction',(req,res)=> res.render('gameinstructionpage'));
router.get('/login',(req,res)=> res.render('loginpage'));

//Game page
router.get('/endpage',(req,res)=> res.render('endpage'));
router.get('/game',(req,res)=> res.render('game'));

// post 
router.post('/login',(req,res)=>res.render('game'));

module.exports = router;





// router.get('/instruction',(req,res)=> {
//     const text ='';
//     if(req.body.home)
//     res.render('instructionpage',{text:'hello'});
//     // else if(req.body.game)
//     // res.render('instructionpage',{text:'/game'});
// });