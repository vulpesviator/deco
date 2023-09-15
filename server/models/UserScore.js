const mongoose = require('mongoose');

const { Schema } = mongoose;

const userScoreSchema = new Schema({
    abstract: {
        type: Number,
        required: true,
        default: 0
    },
    artDeco: {
        type: Number,
        required: true,
        default: 0
    },
    artNouveau: {
        type: Number,
        required: true,
        default: 0
    },
    conceptual: {
        type: Number,
        required: true,
        default: 0
    },
    constructivism: {
        type: Number,
        required: true,
        default: 0
    },
    expressionism: {
        type: Number,
        required: true,
        default: 0
    },
    gothic: {
        type: Number,
        required: true,
        default: 0
    },
    impressionism: {
        type: Number,
        required: true,
        default: 0
    },
    midCentury: {
        type: Number,
        required: true,
        default: 0
    },
    minimalism: {
        type: Number,
        required: true,
        default: 0
    },
    modernism: {
        type: Number,
        required: true,
        default: 0
    },
    neoclassicism: {
        type: Number,
        required: true,
        default: 0
    },
    popArt: {
        type: Number,
        required: true,
        default: 0
    },
    postModern: {
        type: Number,
        required: true,
        default: 0
    },
    realism: {
        type: Number,
        required: true,
        default: 0
    },
    renaissance: {
        type: Number,
        required: true,
        default: 0
    },
    romanticism: {
        type: Number,
        required: true,
        default: 0
    },
    rustic: {
        type: Number,
        required: true,
        default: 0
    },
    streetSymbolism: {
        type: Number,
        required: true,
        default: 0
    },
    surrealism: {
        type: Number,
        required: true,
        default: 0
    },
});

module.exports = userScoreSchema;
