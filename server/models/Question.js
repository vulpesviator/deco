const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema({
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
  text: {
    type: String,
    required: true
  },
  answers: [answerSchema],
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Image',
      required: true
    }
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
