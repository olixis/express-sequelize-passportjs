const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/').User;

router.get('/', function (req, res, next) {
    res.render('login');
});

let combo = {
    "meta": {
        "total_count": 8
    },
    "objects": [{
        "id": 1,
        "nome": "Mobilidade"
    }, {
        "id": 2,
        "nome": "Redes de água e esgoto"
    }, {
        "id": 3,
        "nome": "Redes de energia, dados e gás"
    }, {
        "id": 4,
        "nome": "Desordem urbana"
    }, {
        "id": 5,
        "nome": "Crimes"
    }, {
        "id": 6,
        "nome": "Meio ambiente"
    }, {
        "id": 7,
        "nome": "Comércio e serviços"
    }, {
        "id": 8,
        "nome": "Outros"
    }]
}

router.get('/map', isAuth, function (req, res, next) {
    res.render('index', combo);
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