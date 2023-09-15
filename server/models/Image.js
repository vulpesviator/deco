const mongoose = require('mongoose');

const { Schema } = mongoose;
const imageSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;