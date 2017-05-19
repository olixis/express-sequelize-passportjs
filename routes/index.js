const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('login');
});


router.get('/map',isAuth, function(req, res, next) {
  res.render('index');
});

router.post('/login',passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/map',
    failureFlash: false
}), function(req, res, next) {
    res.render('login');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = router;

