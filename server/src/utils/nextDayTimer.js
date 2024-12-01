const moment = require('moment-timezone');

const calculateTimeUntilNextDay = () => {
    const now = moment.tz('Europe/Berlin');
    const nextDay = moment.tz('Europe/Berlin').add(1, 'days').startOf('day');

    const difference = nextDay.diff(now);
    const differenceInSeconds = Math.floor(difference / 1000);
    return differenceInSeconds;
};

module.exports = calculateTimeUntilNextDay;