const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artwork',
      required: true
    }
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  ]
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;