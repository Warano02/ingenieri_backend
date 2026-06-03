const { teacherDashboard } = require("../controllers/metadata.controller")
const { teacherOnly, protect } = require("../middlewares/auth.middleware")

const router = require("express").Router()
router.get("/admin_dashboard", protect, teacherOnly, teacherDashboard)
module.exports = router