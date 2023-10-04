const mongoose = require('mongoose');

const questionAnswerSchema = new mongoose.Schema({
  technology: {
    type: String,
    required: true,
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

const QuestionAnswer = mongoose.model('QuestionAnswer', questionAnswerSchema);

module.exports = QuestionAnswer;