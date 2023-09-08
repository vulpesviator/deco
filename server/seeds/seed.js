const db = require('../config/connection');

const {Question} = require('../models');
const questionSeeds = require('./questions.json');

db.once('open', async () => {
    try{
        await Question.deleteMany({});
        await Question.create(questionSeeds);
        console.log('questions seeded!');
        process.exit();
    }
    catch (err) {
        throw err;
      }
})