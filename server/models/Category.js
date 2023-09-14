const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  scoreCategory: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  }, 
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
