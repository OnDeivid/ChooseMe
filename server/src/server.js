const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const { getAll } = require('./service/competitor');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: false
}

app.use(cors(corsOptions));

connectDB()


app.get('/categorySuggestion/:name', async (req, res) => {

    const sectionName = req.params.name
    const data = await getAll(sectionName)
    console.log(data)
    res.status(200).json('its work we good ');
});

app.post('/choice/:category/:choosen', (req, res) => {
    res.send(req.ip);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
