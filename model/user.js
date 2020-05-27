const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type:String,
        maxlength: 20,
        require: true
    },
    lastName: {
        type:String,
        maxlength: 20,
        require: true
    },
    mobileNumber: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;