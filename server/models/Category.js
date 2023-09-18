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
    type: String
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
