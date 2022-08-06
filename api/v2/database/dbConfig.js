const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
    const url = process.env.MONGO_CONNECTION_STRING;

    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }) 
    
}

module.exports = {
    connect,
    
}