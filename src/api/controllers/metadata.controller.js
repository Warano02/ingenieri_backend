const Courses = require('../../models/course.model')
exports.teacherDashboard = async (req, res) => {
    try {
        const myCourse = await Courses.find({ teacher: req.user.id }).select("title").lean()
        res.json({ courses: myCourse })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: true, msg: "Internal Server Error" })
    }
}