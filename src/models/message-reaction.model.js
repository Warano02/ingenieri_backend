const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MessageReactionSchema = new Schema(
    {
        message: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            required: true,
            index: true,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        emoji: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

MessageReactionSchema.index({ message: 1, user: 1, emoji: 1, }, { unique: true, });

module.exports = model("MessageReaction", MessageReactionSchema);