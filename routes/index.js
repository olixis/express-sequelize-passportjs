const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/').User;

router.get('/', function (req, res, next) {
    res.render('login');
});


router.get('/map', isAuth, function (req, res, next) {
    res.render('index');
});

router.post('/signUp', function (req, res, next) {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    }).then(user => {
        console.log(user)
        res.redirect('/map');
    }).catch(err => {
        console.log(err)
        res.redirect('/');
    });
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/map',
    failureFlash: false
}), function (req, res, next) {
    res.render('login');
});

router.get('/logout', function (req, res) {
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