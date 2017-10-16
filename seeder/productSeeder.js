const Product = require('../models/product');
const mongoose = require('mongoose');
const config = require('../config/config');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

let products = [
    new Product({
        imagePath: '/img/cart/m2.jpg',
        title: 'White Hoodie',
        description: 'Design with an elegant design just for you!!',
        price: 500
    }),
    new Product({
        imagePath: '/img/cart/s1.jpg',
        title: 'Leather Shoes',
        description: 'Leather all the way',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/w1.jpg',
        title: 'Female Wear',
        description: 'We love the to see you looking good',
        price: 750
    }),
    new Product({
        imagePath: '/img/cart/w6.jpg',
        title: 'Rolex Watch',
        description: 'The brand speaks for itself',
        price: 5000
    }),
    new Product({
        imagePath: '/img/cart/s5.jpg',
        title: 'Ladies Wear',
        description: 'This is an all weather shoes, perfectly designed',
        price: 200
    }),
    new Product({
        imagePath: '/img/cart/m5.jpg',
        title: 'Black Jeans',
        description: 'You need to look good, we got you',
        price: 100
    }),
];

let done = 0;

for(let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if(done === products.length) {
            console.log(result);
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}