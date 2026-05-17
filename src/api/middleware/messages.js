const Classroom = require("../../models/classroom.model")
exports.ClassroomMidle = async (req, res, next) => {
    try {
        const classId = req.params?.id
        if (!classId) return res.status(400).json({ message: "Please provide the class id in the params !" })
        const exist = await Classroom.findOne({ _id: classId })
        if (!exist) return res.status(404).json({ message: "Invalid class Id" })
        req.room = classId
        next()
    } catch {
        res.status(500).json({ error: true, message: "Internal Server Error" })
    }
}