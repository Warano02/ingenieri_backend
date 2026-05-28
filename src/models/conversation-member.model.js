const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ConversationMemberSchema = new Schema(
    {
        conversation: {
            type: Schema.Types.ObjectId,
            ref: "Conversation",
            required: true,
            index: true,
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        role: {
            type: String,
            enum: ["owner", "admin", "member"],
            default: "member",
        },

        joinedAt: {
            type: Date,
            default: Date.now,
        },

        lastSeenMessage: {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: null,
        },

        unreadCount: {
            type: Number,
            default: 0,
        },

        isMuted: {
            type: Boolean,
            default: false,
        },

        mutedUntil: {
            type: Date,
            default: null,
        },

        isPinned: {
            type: Boolean,
            default: false,
        },

        isArchived: {
            type: Boolean,
            default: false,
        },

        notificationPreference: {
            type: String,
            enum: ["all", "mentions", "none"],
            default: "all",
        },

        nickname: {
            type: String,
            trim: true,
            maxlength: 60,
        },

        permissions: {
            canSendMessage: {
                type: Boolean,
                default: true,
            },

            canSendFiles: {
                type: Boolean,
                default: true,
            },
        },

        isRemoved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

ConversationMemberSchema.index({ conversation: 1, user: 1 }, { unique: true });

ConversationMemberSchema.index({ user: 1, updatedAt: -1 });

module.exports = model("ConversationMember", ConversationMemberSchema);