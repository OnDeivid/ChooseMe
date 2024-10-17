const express = require('express');
const moment = require('moment-timezone');
const cors = require('cors');
const connectDB = require('./config/db');
const helmet = require('helmet')
const rateLimit = require('express-rate-limit');
const calculateTimeUntilNextDay = require('./utils/nextDayTimer');

const { getSectionData, increaseCount, getAllSectionData } = require('./service/competitor');

const app = express();



const corsOptions = {
    origin: ['https://choose-me-deivids-projects-ec29e37b.vercel.app','https://choose-me-deivids-projects-ec29e37b.vercel.app/comics'],
    optionsSuccessStatus: 200,
    credentials: false
}

app.use(helmet())
app.use(cors(corsOptions));
app.use(express.json())

connectDB()

const limiterCars = rateLimit({
    windowMs: calculateTimeUntilNextDay(),//until the next day
    max: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const limiterLol = rateLimit({
    windowMs: calculateTimeUntilNextDay(),//until the next day
    max: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const limiterHeros = rateLimit({
    windowMs: calculateTimeUntilNextDay(),//until the next day
    max: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.get('/', async (req, res) => {
    let data = await getAllSectionData()

    res.status(200).json({ data });
})

app.get('/getDate', (req, res) => {
    const currentDate = moment.tz('Europe/Berlin').format('YYYY-MM-DD');
    try {
        res.status(200).json(currentDate);

    } catch {
        res.status(404).json('server error');
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
            res.status(404).json('123');
        }
    }
});

app.put('/choice/lol/', limiterLol, async (req, res) => {
    console.log(calculateTimeUntilNextDay())

    const { name } = req.body
    await increaseCount('lol', name)

    res.status(200).json('lol');

});

app.put('/choice/cars/', limiterCars, async (req, res) => {
    console.log(calculateTimeUntilNextDay())

    const { name } = req.body
    await increaseCount('cars', name)

    res.status(200).json('cars');

});

app.put('/choice/heros/', limiterHeros, async (req, res) => {
    console.log(calculateTimeUntilNextDay())

    const { name } = req.body
    await increaseCount('heros', name)

    res.status(200).json('heros');

});
