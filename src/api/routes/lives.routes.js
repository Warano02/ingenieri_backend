const express = require("express");
const router = express.Router();
const liveController = require("../controllers/live.controller");

router.post("/", liveController.createLive);
router.get("/classroom/:classroomId", liveController.getLivesByClassroom);
router.get("/:id", liveController.getLiveById);
router.patch("/:id/start", liveController.startLive);
router.patch("/:id/end", liveController.endLive);
router.post("/:id/join", liveController.joinLive);

module.exports = router;