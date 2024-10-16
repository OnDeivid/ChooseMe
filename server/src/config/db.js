const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://tino19950:TT0VYyWIqHHB0rdr@chooseme.bphmh.mongodb.net/?retryWrites=true&w=majority&appName=ChooseMe')
        .then(() => console.log('MongoDB connected successfully'))
        .catch((error) => console.log('Error connecting to MongoDB:', error));
}

module.exports = connectDB;
