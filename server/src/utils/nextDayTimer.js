const moment = require('moment-timezone');

const calculateTimeUntilNextDay = () => {
    const now = moment.tz('Europe/Berlin');
    const nextDay = moment.tz('Europe/Berlin').add(1, 'days').startOf('day');

    const difference = nextDay.diff(now);
    return difference;
};

module.exports = calculateTimeUntilNextDay;