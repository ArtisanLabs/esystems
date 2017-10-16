const Product = require('../models/motor');
const mongoose = require('mongoose');
const config = require('../config/config');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

let products = [
    new Product({
        imagePath: '/img/cart/motor/pic1.jpg',
        title: 'White BMW',
        description: 'Ultimate racing machine',
        price: 500500
    }),
    new Product({
        imagePath: '/img/cart/motor/pic2.jpg',
        title: 'Yellow Yamaha',
        description: 'From 0-100 in 5s ',
        price: 750000
    }),
    new Product({
        imagePath: '/img/cart/motor/pic3.jpg',
        title: 'Blue Yamaha',
        description: 'Blue is speed',
        price: 850000
    }),
    new Product({
        imagePath: '/img/cart/motor/pic4.jpg',
        title: 'Black Yamaha',
        description: 'From 0-100 in 5s, super fast ',
        price: 900000
    }),
    new Product({
        imagePath: '/img/cart/motor/pic2.jpg',
        title: 'Yellow Yamaha',
        description: 'From 0-100 in 5s ',
        price: 7500
    }),
    new Product({
        imagePath: '/img/cart/pic5.jpg',
        title: 'Blue Chrome',
        description: 'Speedy beauty',
        price: 2500
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