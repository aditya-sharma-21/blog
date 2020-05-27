const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var questionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

const Questions = mongoose.model("Question", questionSchema);

module.exports = Questions