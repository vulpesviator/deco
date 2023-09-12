const mongoose = require('mongoose');

const { Schema } = mongoose;

const answerSchema = new Schema({
  text: {
    type: String,
   
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  
  }
})

const questionSchema = new Schema({
  text: {
    type: String,
   
  },
  answers: [answerSchema],
  image: [ 
    {
      type: String
    }
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
