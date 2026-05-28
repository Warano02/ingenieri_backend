require("dotenv").config()
const { Server } = require("socket.io");

const registerSocketHandlers = require("../socket");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [process.env.CLIENT_URL],
      credentials: true,
    },
  });

  registerSocketHandlers(io);

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
};

module.exports = {
  initSocket,
  getIO,
};