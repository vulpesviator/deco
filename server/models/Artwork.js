const mongoose = require('mongoose');

const { Schema } = mongoose;

const artworkSchema = new Schema({
    image: {
      type: Schema.Types.ObjectId,
      ref: 'Image'
    },
    artist: {
      type: String
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  });

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;