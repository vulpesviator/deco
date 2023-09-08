const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artwork'
    }
  ],
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    }
  ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
