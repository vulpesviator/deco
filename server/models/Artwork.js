const mongoose = require('mongoose');

const { Schema } = mongoose;

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
      type: String
    },
    artist: {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  });

  const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;