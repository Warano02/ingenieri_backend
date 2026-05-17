const SeedUser = require("./users")

const router = require("express").Router()

router.get("/user", async (req, res) => {
    await SeedUser()
    res.json({ message: "Users has been created successfully ! " })
})

module.exports = router