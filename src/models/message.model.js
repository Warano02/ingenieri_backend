const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ReadSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        readAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        _id: false,
    }
);

const ReactionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        emoji: {
            type: String,
            required: true,
            maxlength: 20,
        },
    },
    {
        timestamps: true,
        _id: false,
    }
);

const MessageSchema = new Schema(
    {
        conversation: {
            type: Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
            index: true,
        },

        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        type: {
            type: String,
            enum: ["text", "image", "video", "audio", "file", "system", "call",],
            default: "text",
            index: true,
        },

        content: {
            type: String,
            trim: true,
        },

        attachments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Attachment",
            },
        ],

        mentions: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        reactions: [ReactionSchema],

        readBy: [ReadSchema],

        replyTo: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        },

        forwardedFrom: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        },

        editedAt: {
            type: Date,
            default: null,
        },

        deletedAt: {
            type: Date,
            default: null,
        },

        isDeletedForEveryone: {
            type: Boolean,
            default: false,
        },

        metadata: {
            callDuration: Number,

            systemAction: {
                type: String,
                enum: [
                    "user_joined",
                    "user_left",
                    "user_removed",
                    "conversation_created",
                    "room_started",
                    "room_ended",
                ],
            },

            systemTargetUser: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        },
    },
    {
        timestamps: true,
    }
);

MessageSchema.index({ conversation: 1, createdAt: -1, });
MessageSchema.index({ sender: 1, createdAt: -1, });
MessageSchema.index({ mentions: 1, });

module.exports = model("Message", MessageSchema);