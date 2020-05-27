const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSchema = new Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Question',
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Answers = mongoose.model("Answer", answerSchema);

module.exports = Answers