const mongoose = require("mongoose");

const liveSchema = new mongoose.Schema(
    {
        classroom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Classroom",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        day: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["scheduled", "live", "ended"],
            default: "scheduled",
        },
        callId: {
            type: String,
            unique: true,
            sparse: true,
        },
        startedAt: Date,
        endedAt: Date,
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("LivesSession", liveSchema);