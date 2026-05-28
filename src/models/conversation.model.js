const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ConversationSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["dm", "group", "classroom", "channel"],
            required: true,
            index: true,
        },

        name: {
            type: String,
            trim: true,
            maxlength: 120,
        },

        description: {
            type: String,
            trim: true,
            maxlength: 500,
        },

        avatar: {
            type: String,
            default: null,
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        linkedRoom: {
            type: Schema.Types.ObjectId,
            ref: "Room",
            default: null,
        },

        isPublic: {
            type: Boolean,
            default: false,
        },

        lastMessage: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        },

        lastActivityAt: {
            type: Date,
            default: Date.now,
            index: true,
        },

        messageCount: {
            type: Number,
            default: 0,
        },

        settings: {
            onlyAdminsCanPost: {
                type: Boolean,
                default: false,
            },

            canSendFiles: {
                type: Boolean,
                default: true,
            },

            canSendVoice: {
                type: Boolean,
                default: true,
            },

            canReact: {
                type: Boolean,
                default: true,
            },
        },

        isArchived: {
            type: Boolean,
            default: false,
        },

        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

ConversationSchema.index({ type: 1 });
ConversationSchema.index({ lastActivityAt: -1 });

module.exports = model("Conversation", ConversationSchema);