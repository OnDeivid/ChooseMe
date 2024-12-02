require('dotenv').config()
const { Ratelimit } = require('@upstash/ratelimit')
const moment = require('moment-timezone');
const { Redis } = require('@upstash/redis');
const calculateTimeUntilNextDay = require('./../utils/nextDayTimer')

const rateLimit_getDate = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        try {
            const clientIp = req.headers['x-forwarded-for']?.split(',')[0];
            const ratelimit = new Ratelimit({
                redis: Redis.fromEnv(),
                limiter: Ratelimit.slidingWindow(maxRequests, windowSize + ' s'),
                analytics: true,
                prefix: "picasso1",
            });

            const identifier = clientIp;
            const { success } = await ratelimit.limit(identifier);


            if (!success) {
                return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
            }

            next();
        } catch (error) {
            console.error("Error in rate limit middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

const rateLimit_lol = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        try {
            const clientIp = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0].trim();
            const ratelimit = new Ratelimit({
                redis: Redis.fromEnv(),
                limiter: Ratelimit.slidingWindow(maxRequests, windowSize + ' s'),
                analytics: true,
                prefix: "picasso2",
            });

            const identifier = clientIp;
            const { success } = await ratelimit.limit(identifier);

            if (!success) {
                return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
            }

            next();
        } catch (error) {
            console.error("Error in rate limit middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

const rateLimit_cars = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        try {
            const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;
            const ratelimit = new Ratelimit({
                redis: Redis.fromEnv(),
                limiter: Ratelimit.slidingWindow(maxRequests, windowSize + ' s'),
                analytics: true,
                prefix: "picasso3",
            });

            const identifier = clientIp;
            const { success } = await ratelimit.limit(identifier);

            if (!success) {
                return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
            }

            next();
        } catch (error) {
            console.error("Error in rate limit middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

const rateLimit_heros = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        try {
            const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;
            const ratelimit = new Ratelimit({
                redis: Redis.fromEnv(),
                limiter: Ratelimit.slidingWindow(maxRequests, windowSize + ' s'),
                analytics: true,
                prefix: "picasso4",
            });

            const identifier = clientIp;
            const { success } = await ratelimit.limit(identifier);

            if (!success) {
                return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
            }

            next();
        } catch (error) {
            console.error("Error in rate limit middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};

const rateLimit_votesUpdated = (maxRequests, windowSize) => {
    return async (req, res, next) => {
        try {
            const clientIp = req.headers['x-forwarded-for']?.split(',')[0];
            const ratelimit = new Ratelimit({
                redis: Redis.fromEnv(),
                limiter: Ratelimit.slidingWindow(maxRequests, windowSize + ' s'),
                analytics: true,
                prefix: "picasso1",
            });

            const identifier = clientIp;
            const { success } = await ratelimit.limit(identifier);


            if (!success) {
                return res.status(429).send("Rate limit exceeded. Please try again later." + windowSize);
            }

            next();
        } catch (error) {
            console.error("Error in rate limit middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
};



module.exports = {
    rateLimit_cars,
    rateLimit_getDate,
    rateLimit_lol,
    rateLimit_heros,
    rateLimit_votesUpdated
};
