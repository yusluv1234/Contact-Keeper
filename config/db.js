const Mongoose = require('mongoose');
const config  = require('config');
const db = config.get('mongoURL');

const connectDB = () =>  {
    mongoose
    .connect(db,  {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('mongoDB Connected'))
    .catch(err => {
        console.err(er.message);
    });
};

module.exports = connectDB;