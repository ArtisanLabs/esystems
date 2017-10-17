const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_6vzGCKFgE70LfjNoj1OttcjR');

const Fashion = require('../models/fashion');
const Sport = require('../models/sport');
const Motor = require('../models/motor');
const Electronic = require('../models/electronics');
// fashion Route
router.get('/fashion', (req, res) => {
    Fashion.find((err, docs) => {
        let productChunks = [];
        let chunkSize = 3;
        for( let i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('fashion', {
            products: productChunks
        });
    });
});

// electronic Route
router.get('/electronics', (req, res) => {
    Electronic.find((err, docs) => {
        let productChunks = [];
        let chunkSize = 3;
        for( let i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('electronics', {
            products: productChunks
        });
    });
});

//motor route
router.get('/motor', (req, res) => {
    Motor.find((err, docs) => {
        let productChunks = [];
        let chunkSize = 3;
        for( let i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('motor', {
            products: productChunks
        });
    });
});

//sport route
router.get('/sport', (req, res) => {
    Sport.find((err, docs) => {
        let productChunks = [];
        let chunkSize = 3;
        for( let i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('sport', {
            products: productChunks
        });
    });
});

//buy route
router.post('/charge', (req, res) => {
    const amount = 2500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer => stripe.charges.create({
            amount,
            description: 'Web Development Ebook',
            currency: 'usd',
            customer: customer.id
        }))
        .then(charge => res.render('success'));
});

module.exports = router;