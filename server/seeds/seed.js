const db = require('../config/connection');

const {Question, Category, Image} = require('../models');
const categorySeeds = require('./categories.json');
const imageSeedsPlain = require('./images.json');
const questionSeedsPlain = require('./questions.json');



db.once('open', async () => {
    try{
        await Category.deleteMany({});
        await Question.deleteMany({});
        await Image.deleteMany({});
        await Category.create(categorySeeds);
        const categories = await Category.find({});
        const imageSeeds = imageSeedsPlain.map(({src, category}) => {
            return { src, category: categories.find(({name}) => name === category) }
        });
        await Image.insertMany(imageSeeds);
        const images = await Image.find({});
        const questionSeeds = questionSeedsPlain.map(({text, image}) => {
            return { text, image: image.map((imageSrc) => {
                return images.find(({src}) => src === imageSrc)
            })}
        });
        await Question.insertMany(questionSeeds);
        
        
        console.log('categories seeded!', 'images seeded!', 'questions seeded!');
        
        process.exit();
    }
    catch (err) {
        throw err;
      }
})