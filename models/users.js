const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//products schema
let userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const User = module.exports = mongoose.model('User', userSchema);