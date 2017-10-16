const Product = require('../models/electronics');
const mongoose = require('mongoose');
const config = require('../config/config');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

let products = [
    new Product({
        imagePath: '/img/cart/pic8.jpg',
        title: 'Grey Smart phone',
        description: '4GB RAM 8GB SD',
        price: 12500
    }),
    new Product({
        imagePath: '/img/cart/pic9.jpg',
        title: 'Digital Camera',
        description: 'Capture all moments',
        price: 7500
    }),
    new Product({
        imagePath: '/img/cart/pic12.jpg',
        title: 'Black Smart phone',
        description: '8GB RAM 16GB SD',
        price: 14750
    }),
    new Product({
        imagePath: '/img/cart/pic10.jpg',
        title: '10\' Tablet',
        description: '12MP Camera 32GB SD',
        price: 5000
    }),
    new Product({
        imagePath: '/img/cart/pic11.jpg',
        title: 'Digital Camera',
        description: 'Capture all moments',
        price: 7500
    }),
    new Product({
        imagePath: '/img/cart/pic5.jpg',
        title: 'PS4 Pad',
        description: 'Gaming Machine',
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