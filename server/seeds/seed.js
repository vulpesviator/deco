const db = require('../config/connection');

const {Category, Image} = require('../models');
const categorySeedsPlain = require('./categories.json');
const imageSeedsPlain = require('./images.json');


db.once('open', async () => {
    try{
        await Category.deleteMany({});
        await Image.deleteMany({});
        await Category.create(categorySeedsPlain);
        const categories = await Category.find({});
        const imageSeeds = imageSeedsPlain.map(({src, artist, category}) => {
            return { src, artist, category: categories.find(({name}) => name === category) }
        });
        await Image.insertMany(imageSeeds);
        const images = await Image.find({});
        
        
        console.log('categories seeded!', 'images seeded!');
        
        process.exit();
    }
    catch (err) {
        throw err;
      }
})