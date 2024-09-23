const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/WarEnder')
        .then(() => console.log('db connected'))
        .catch((e) => console.log(e))
}

module.exports = connectDB
