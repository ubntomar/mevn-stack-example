const mongoose = require('mongoose');

const connectToDB = () => {

    const url = process.env.MONGO_CONNECTION_STRING;

    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }) 

    
}


module.exports = {
    connectToDB,
    
}