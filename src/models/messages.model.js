const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Classroom",
            required: true
        },
        read: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }],
            default: []
        },
        content: String,
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Message", messageSchema);