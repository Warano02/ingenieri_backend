const LiveSession = require("../../models/lives.model");
const streamClient = require("../../config/streamClient");
const { v4: uuidv4 } = require("uuid");

const Enrollment = require("../../models/enrollment.model");
const { sendMail } = require("../../config/mailer");

const createLive = async (req, res) => {
    try {
        const { classroom, title, description, day } = req.body;
        const live = await LiveSession.create({
            classroom,
            title,
            description,
            day,
            createdBy: req.user.id,
        });
        const enrollments = await Enrollment.find({
            classroom,
            status: "active",
            role: "student",
        }).populate("user", "email name");
        const mails = enrollments.map(({ user }) => {
            sendMail({
                to: user.email,
                subject: `Nouveau live : ${title}`,
                html: `<p>Bonjour ${user.name},</p><p>Un nouveau live "<strong>${title}</strong>" est planifié le <strong>${new Date(day).toLocaleString("fr-FR")}</strong>.</p><p>${description}</p>`,
            })
            console.log(`Mail sent to ${user.email} for live "${title}"`)
        });
        res.status(201).json(live);
        await Promise.all(mails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLivesByClassroom = async (req, res) => {
    try {
        const lives = await LiveSession.find({ classroom: req.params.classroomId }).sort({ day: 1 });
        res.status(200).json(lives);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLiveById = async (req, res) => {
    try {
        const live = await LiveSession.findById(req.params.id).populate("createdBy", "name email");
        if (!live) return res.status(404).json({ message: "Live not found" });
        res.status(200).json(live);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const startLive = async (req, res) => {
    try {
        const live = await LiveSession.findById(req.params.id);
        if (!live) return res.status(404).json({ message: "Live not found" });
        if (live.status !== "live") return res.status(400).json({ message: "Live is not active yet" });
        const token = streamClient.generateUserToken({ user_id: req.user._id.toString() });
        res.status(200).json({ token, callId: live.callId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const endLive = async (req, res) => {
    try {
        const live = await LiveSession.findById(req.params.id);
        if (!live) return res.status(404).json({ message: "Live not found" });
        if (live.status !== "live") return res.status(400).json({ message: "Live is not active" });
        const call = streamClient.video.call("livestream", live.callId);
        await call.end();
        live.status = "ended";
        live.endedAt = new Date();
        await live.save();
        res.status(200).json(live);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const joinLive = async (req, res) => {
    try {
        const live = await LiveSession.findById(req.params.id);
        if (!live) return res.status(404).json({ message: "Live not found" });
        if (live.status !== "live") return res.status(400).json({ message: "Live is not active" });
        const userId = req.user._id.toString();
        const token = streamClient.generateUserToken({ user_id: userId });
        if (!live.participants.includes(req.user._id)) {
            live.participants.push(req.user._id);
            await live.save();
        }
        res.status(200).json({ token, callId: live.callId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createLive, getLivesByClassroom, getLiveById, startLive, endLive, joinLive };