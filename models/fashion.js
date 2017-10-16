const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//products schema
let fashionSchema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true}
});

const Fashion = module.exports = mongoose.model('Fashion', fashionSchema);