require("dotenv").config();
const { StreamClient } = require("@stream-io/node-sdk");

const client = new StreamClient(
    process.env.STREAM_API_KEY,
    process.env.STREAM_API_SECRET
);

module.exports = client;