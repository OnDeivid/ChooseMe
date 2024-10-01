const calculateTimeUntilNextDay = () => {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    return nextDay - now;
};

module.exports = calculateTimeUntilNextDay;