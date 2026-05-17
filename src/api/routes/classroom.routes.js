const { teacherOnly } = require("../middleware/protect")
const ctrl = require("../controller/classroom.controller")
const router = require("express").Router()

router.post("/create", teacherOnly, ctrl.createClassrrom)
module.exports = router