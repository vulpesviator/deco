const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema({
  answerId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
})

const questionSchema = new Schema({
  questionId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  },
  answers: [answerSchema],
  image: {
    type: String
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
