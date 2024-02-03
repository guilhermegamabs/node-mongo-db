const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isEmployed: {
        type: Boolean,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('users', UserSchema);