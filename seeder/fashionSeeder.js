const Product = require('../models/fashion');
const mongoose = require('mongoose');
const config = require('../config/config');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

let products = [
    new Product({
        imagePath: '/img/cart/m8.jpg',
        title: 'Official Wear - Men',
        description: 'Look good all the time',
        price: 3500
    }),
    new Product({
        imagePath: '/img/cart/w2.jpg',
        title: 'Ladies Wear',
        description: 'Look good, anytime',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/s2.jpg',
        title: 'Nike Sneakers',
        description: 'You love Nike, we got it',
        price: 4500
    }),
    new Product({
        imagePath: '/img/cart/w6.jpg',
        title: 'Rolex',
        description: 'The brand speaks for itself',
        price: 5000
    }),
    new Product({
        imagePath: '/img/cart/s5.jpg',
        title: 'Ladies Wear',
        description: 'This is an all weather shoes, perfectly designed',
        price: 1200
    }),
    new Product({
        imagePath: '/img/cart/m5.jpg',
        title: 'Black Jeans',
        description: 'You need to look good, we got you',
        price: 1100
    }),
    new Product({
        imagePath: '/img/cart/s1.jpg',
        title: 'Leather Shoes',
        description: 'Leather all the way',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/w4.jpg',
        title: 'Summer Time',

        description: 'Perfect clad for summer',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/w7.jpg',
        title: 'Socks',
        description: 'Perfect socks to rock your sneakers',
        price: 200
    }),
];

let done = 0;

for(let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}