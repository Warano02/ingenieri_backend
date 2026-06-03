const Course = require("../models/course.model")
const Modules = require("../models/courseModule.model")
const Lessons = require("../models/lesson.model")
class CourseManagement {
    async getCourse(req, res) {
        try {
            const id = req.query?.id
            const user_id = req.user.id
            if (!id) return res.status(400).json({ error: true, msg: "Please  provide the course id !" })
            const course = await Course.findById(id)
            if (!course) return res.status(404).json({ error: true, msg: "Course Not found !" })
            const formatedCourse = []
            const modules = await Modules.find({ course: course._id },).select("title estimatedDuration").lean()
            for (const module of modules) {
                const lessons = await Lessons.find({ module: module._id })
                let l = []
                for (const lesson of lessons) {
                    if (lesson) {

                    }
                }
            }

        } catch (e) {
            res.status(500).json({ error: true, msg: "Internal Server Error " })
        }
    }

}

module.exports = new CourseManagement()