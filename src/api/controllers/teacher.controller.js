const ClassRoom = require("../../models/classroom.model")
const Course = require('../../models/course.model')
const User = require('../../models/user.model');
const Enrollment = require('../../models/enrollment.model');

exports.getMyClassRooms = async (req, res) => {
    try {
        const teacher = req.user.id
        const cr = await ClassRoom.find({ teacher }).select("name description slogan joinCode createdAt").lean()
        res.json({ success: true, msg: "Here Is your classRooms", classRooms: cr })

    } catch (e) {
        console.log("error occured while trying to fetch teacher own classRoom ", e)
        res.status(500).json({ success: false, msg: "Internal Server error !" })
    }
}

exports.pendingEnrollment = async (req, res) => {
    try {
        const classroom = req.query?.classroom

        if (classroom) {
            const enr = await Enrollment.find({ classroom, status: "pending" }).select("user joinedAt").populate("user", "name email avatar").lean()
            return res.json({ error: false, enrollment: enr })
        }
        const teacher = req.user.id
        const cr = await ClassRoom.find({ teacher }).select("name").lean()

        let result = []
        for (const classroom of cr) {
            const enrollments = await Enrollment.find({ classroom: classroom._id, status: "pending" }).select("user joinAt").populate("user", "-_id name avatar email").lean()
            enrollments.forEach(enrollment => {
                result.push({
                    id: enrollment.id,
                    name: enrollment.user.name,
                    avatar: enrollment.user.avatar,
                    classroom: classroom.name
                })
            })
        }
        return res.json({ error: false, enrollments: result })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: true, message: "Interal Server Error !" })
    }
}