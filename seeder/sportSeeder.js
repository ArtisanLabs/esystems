const Product = require('../models/sport');
const mongoose = require('mongoose');
const config = require('../config/config');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

let products = [
    new Product({
        imagePath: '/img/cart/s7.jpg',
        title: 'Rubber Shoes',
        description: 'Keep fit, light weight',
        price: 3500
    }),
    new Product({
        imagePath: '/img/cart/w3.jpg',
        title: 'Shorts',
        description: 'Perfect for jogging',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/s2.jpg',
        title: 'Nike Sneakers',
        description: 'You love Nike, we got it',
        price: 4500
    }),
    new Product({
        imagePath: '/img/cart/w8.jpg',
        title: 'Tights',
        description: 'Tights for gym',
        price: 5000
    }),
    new Product({
        imagePath: '/img/cart/m3.jpg',
        title: 'Sweat Pants',
        description: 'Perfect for gym sessions',
        price: 1200
    }),
    new Product({
        imagePath: '/img/cart/b3.jpg',
        title: 'Back Pack',
        description: 'Suitable for sports gear',
        price: 1100
    }),
    new Product({
        imagePath: '/img/cart/w5.jpg',
        title: 'Yoga Pants',
        description: 'Rock yoga sessions',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/w3.jpg',
        title: 'Shorts',
        description: 'Perfect for jogging',
        price: 1500
    }),
    new Product({
        imagePath: '/img/cart/w7.jpg',
        title: 'Socks',
        description: 'Perfect socks to rock in sports',
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