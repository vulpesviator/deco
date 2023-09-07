const mongoose = require('mongoose');

const { Schema } = mongoose;

const artworkSchema = new Schema({
    artworkId: {
      type: mongoose.Types.ObjectId,
      default: new mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
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
  })