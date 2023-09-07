const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistSchema = new Schema({
  artistId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  artworks: [{
    type: String,
    // getArtist util?
  }],
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