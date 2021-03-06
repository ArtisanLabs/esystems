const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const config = require('./config/config');
const Product = require('./models/product');
const shop = require('./routes/index');
const user = require('./routes/users');

//Create DB connection
mongoose.connect(config.database, {
    useMongoClient: true
});

//On successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
});

//DB errors
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err)
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


const app = express();

// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
    Product.find((err, docs) => {
        let productChunks = [];
        let chunkSize = 3;
        for( let i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('index', {
            products: productChunks
        });
    });
});

app.use('/shop', shop);
app.use('/user', user);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
