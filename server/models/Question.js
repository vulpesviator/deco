const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema({
  text: {
    type: String,
   
  },
  image: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'Image'
    }
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
