const express = require('express');
const router = express.Router();

const User = require('../models/users');

//get signup
router.get('/signup', (req, res) => {
    res.render('user/signup');
});

//get sign in
router.get('/signin', (req, res) => {
    res.render('user/signin');
});

//post sign in
router.post('/signup', (req, res) => {
    let newUser = new User({
        email: req.body.email,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            return res.json({
                success: false,
                msg: 'Failed to add user'
            });
        } else {
            res.redirect('/');
        }
    });
});

//post sign up
router.post('/signin', (req, res) => {
    //get data from the login
    const email = req.body.email;
    const password  =req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err){
            res.json({
                success: false,
                msg: err
            });
        }

        if(!user){
            res.redirect('/');
        } else {
            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) {
                    return res.json({
                        success: false,
                        msg: err
                    });
                }

                if(isMatch){
                    return res.redirect('/');
                }
            })
        }
    })
});

module.exports = router;