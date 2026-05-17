const router = require("express").Router()
const Messages = require("../../models/messages.model")

router.post("/new", async (req, res) => {
    try {
        const { content } = req.body
        if (!content) return res.status(400).json({ message: "Please provide the message !" })
        const message = await Messages.create({ sender: req.user.id, content })
        res.json({ message: "Message sent !", data: message })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Internal Server Error " })
    }
})

router.patch("/read/:id", async (req, res) => {
    try {
        const id = req.params.id
        if (!id) return res.status(400).json({ message: "Identifier of the message !" })
        const m = await Messages.findOne({ _id: id, group: req.room })
        if (!m) return res.status(404).json({ message: "Message not exist " })
        m.read.push(req.user.id)
        await m.save()
        res.json({ message: "Message read successfully !" })
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error " })
    }
})

router.get("/", async (req, res) => {
    try {
        const data = await Messages.find({ group: req.room }).select("-group").populate("read sender").lean()
        res.json({ message: "Here is all your group message", data })
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error " })
    }
})
module.exports = router