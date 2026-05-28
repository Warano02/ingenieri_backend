require("dotenv").config();
const IORedis = require("ioredis");

const connection = new IORedis({
    host: process.env.REDIS_HOST,
    port: 6379,
});

module.exports = connection;