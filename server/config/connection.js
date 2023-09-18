const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deco');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hannahwolfson05:p8SD9gdMyQk8ewE6@cluster0.qbbci2g.mongodb.net/mern-shopping');

module.exports = mongoose.connection;
