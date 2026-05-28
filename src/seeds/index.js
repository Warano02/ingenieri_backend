const seedTags = require("./tag.seed")
const SeedUsers = require("./user.seed")

const Seed = async (req, res) => {
    try {
        await seedTags()
        await SeedUsers()
        res.json({ error: false, msg: "All seed are made successfully !" })
    } catch (e) {
        console.log("Error occured while trying to seed data ", e)
        res.status(500).json({ error: true, msg: "Error occured while trying to seed data" })
    }
}

module.exports = Seed