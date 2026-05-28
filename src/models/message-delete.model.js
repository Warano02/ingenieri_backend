const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MessageDeleteSchema = new Schema(
    {
        message: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            required: true,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        deletedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: false,
    }
);

MessageDeleteSchema.index({ message: 1, user: 1, }, { unique: true, });

module.exports = model("MessageDelete", MessageDeleteSchema);