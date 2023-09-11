const db = require('../config/connection');

const {Question, Category} = require('../models');
const questionSeeds = require('./questions.json');
const categorySeeds = require('./categories.json');

db.once('open', async () => {
    try{
        await Question.deleteMany({});
        await Question.create(questionSeeds);
        await Category.deleteMany({});
        await Category.create(categorySeeds);
        console.log('questions seeded!');
        console.log('categories seeded!');
        process.exit();
    }
    catch (err) {
        throw err;
      }
})