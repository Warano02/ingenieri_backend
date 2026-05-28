const registerAuthHandlers = require("./handlers/auth.handler.js");
const registerConversationHandlers = require("./handlers/conversation.handler.js");
const registerTypingHandlers = require("./handlers/typing.handler.js");
const registerPresenceHandlers = require("./handlers/presence.handler.js");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("Socket connected:", socket.id);

        registerAuthHandlers(io, socket);
        registerConversationHandlers(io, socket);
        registerTypingHandlers(io, socket);
        registerPresenceHandlers(io, socket);

        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });
};