const cron = require("node-cron");
const { v4: uuidv4 } = require("uuid");
const LiveSession = require("../models/lives.model");
const Enrollment = require("../models/enrollment.model");
const streamClient = require("../config/streamClient");
const { sendMail } = require("../config/mailer");

cron.schedule("* * * * *", async () => {
    try {
        const now = new Date();
        const lives = await LiveSession.find({ status: "scheduled", day: { $lte: now } });
        if (!lives.length) return;
        for (const live of lives) {
            const callId = uuidv4();
            const call = streamClient.video.call("livestream", callId);
            await call.create({ data: { created_by_id: live.createdBy.toString() } });
            live.callId = callId;
            const enrollments = await Enrollment.find({
                classroom: live.classroom,
                status: "active",
                role: "student",
            }).populate("user", "email name");
            const liveUrl = `${process.env.CLIENT_URL}/lives/${callId}`;
            const mails = enrollments.map(({ user }) =>
                sendMail({
                    to: user.email,
                    subject: `Le live "${live.title}" commence maintenant`,
                    html: `<p>Bonjour ${user.name},</p><p>Le live "<strong>${live.title}</strong>" vient de commencer.</p><p><a href="${liveUrl}">Rejoindre le live</a></p>`,
                })
            );
            await Promise.all(mails);
            live.status = "live";
            live.startedAt = now;
            await live.save();
        }
    } catch (error) {
        console.error("Live cron error:", error.message);
    }
});