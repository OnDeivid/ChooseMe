const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Check your console for the IP address.');
});

app.post('/categorySuggestion/:id', (req, res) => {
    res.send(req.ip);
});

app.post('/choose/:id', (req, res) => {
    res.send(req.ip);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
