const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://tino19950:admin@picaso.hauzt.mongodb.net/WarEnder?retryWrites=true&w=majority&appName=picaso')
        .then(() => console.log('MongoDB connected successfully'))
        .catch((error) => console.log('Error connecting to MongoDB:', error));
}

module.exports = connectDB;
