const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

//get signup
router.get('/signup', (req, res) => {
    res.render('user/signup');
});

//get sign in
router.get('/signin', (req, res) => {
    res.render('user/signin');
});

//post sign in
router.post('/signin', (req, res) => {
    res.send('user/signin');
});

//post sign up
router.post('/signup', (req, res) => {
    res.send('user/signin');
});

module.exports = router;