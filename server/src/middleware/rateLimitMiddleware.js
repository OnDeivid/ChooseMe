require('dotenv').config()
const { Ratelimit } = require('@upstash/ratelimit')
const moment = require('moment-timezone');
const { Redis } = require('@upstash/redis');

const rateLimitMiddleware = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const ratelimit = new Ratelimit({
            redis: Redis.fromEnv(),
            limiter: Ratelimit.slidingWindow(maxRequests, windowSize + 'ms'),
            analytics: true,
            prefix: "@upstash/ratelimit",
        });

        const identifier = clientIp;
        const { success } = await ratelimit.limit(identifier);

        if (!success) {
            return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
        }

        next();
    };
};


module.exports = {
    rateLimitMiddleware,
};
