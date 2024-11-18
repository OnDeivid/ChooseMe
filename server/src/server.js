require('dotenv').config()
const express = require('express');
const moment = require('moment-timezone');
const cors = require('cors');
const connectDB = require('./config/db');

const calculateTimeUntilNextDay = require('./utils/nextDayTimer');
// const rateLimit = require('express-rate-limit');

const { rateLimit_cars, rateLimit_getDate, rateLimit_heros, rateLimit_lol } = require('./middleware/rateLimitMiddleware');

const { getSectionData, increaseCount, getAllSectionData } = require('./service/competitor');

const helmet = require('helmet');
const app = express();

const corsOptions = {
    origin: ['https://choose-me-deivids-projects-ec29e37b.vercel.app', 'http://localhost:5173', 'http://192.168.0.3:5173', 'http://192.168.0.4:5173', '*'],
}

app.use(helmet())
app.use(cors(corsOptions));
app.use(express.json())
app.disable('x-powered-by')

connectDB()
//TODO write rateLimiter for getting all the data 


// const limiterCars = rateLimit({
//     windowMs: 86400, 
//     max: 1, 
//     standardHeaders: true,
//     legacyHeaders: false, 

// });
// const limiterLol = rateLimit({
//     windowMs: 86400,
//     max: 1, 
//     standardHeaders: true, 
//     legacyHeaders: false, 
// });
// const limiterHeros = rateLimit({
//     windowMs: 86400,
//     max: 1, 
//     standardHeaders: true, 
//     legacyHeaders: false, 
// });
// const getDate = rateLimit({
//     windowMs: 86400,
//     max: 1, 
//     standardHeaders: true, 
//     legacyHeaders: false, 
// });




//get request
app.get('/', async (req, res) => {
    const isAjaxRequest = (req.get('X-Requested-With') == 'XMLHttpRequest');
    if (!isAjaxRequest) {
        res.status(200).json('something get wrong');
    } else {
        try {
            const data = await getAllSectionData()
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json('Internal Server Error.');
        }
    }

})

app.get('/getDate', rateLimit_getDate(2, 86400), (req, res) => {
    const currentDate = moment.tz('Europe/Berlin').format('YYYY-MM-DD');
    try {
        res.status(200).json(currentDate);

    } catch {
        res.status(500).json('Internal Server Error.');
    }
})

app.get('/categorySuggestion/:name', async (req, res) => {

    const sectionName = req.params.name
    const isAjaxRequest = (req.get('X-Requested-With') == 'XMLHttpRequest');

    if (!isAjaxRequest) {
        res.status(200).json('something get wrong');
    } else {
        try {
            const data = await getSectionData(sectionName)
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json('Internal Server Error.');
        }
    }
});


//put request
app.put('/choice/lol/', rateLimit_lol(1, 86400), async (req, res) => {
    console.log(86400)
    try {
        const { name } = req.body
        await increaseCount('lol', name)

        res.status(200).json('You have successfully voted.');
    } catch (err) {
        res.status(500).json('Internal Server Error.');
    }
});

app.put('/choice/cars/', rateLimit_cars(1, 86400), async (req, res) => {
    console.log(86400)
    try {
        const { name } = req.body
        await increaseCount('cars', name)

        res.status(200).json('You have successfully voted.');
    } catch (err) {
        res.status(500).json('Internal Server Error.');
    }
});

app.put('/choice/heros/', rateLimit_heros(1, 86400), async (req, res) => {
    console.log(86400)
    try {
        const { name } = req.body
        await increaseCount('heros', name)

        res.status(200).json('You have successfully voted.');
    } catch (err) {
        res.status(500).json({ err });

    }
});

app.put('/donation/lol/', async (req, res) => {

});


// app.listen(3000, () => console.log('listening'))
module.exports = app;