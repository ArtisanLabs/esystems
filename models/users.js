const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

//products schema
let userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err;

        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
//Get user by username
module.exports.getUserByEmail = function (email, callback) {
    const query = {
        email: email
    };

    User.findOne(query, callback);

};

//Compare password
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
};