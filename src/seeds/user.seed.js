const createSystemCollections = require("../core/createSystemCollections");
const User = require("../models/user.model")
const Settings = require("../models/userSettings.model")
const users = [
    {
        name: "Felix Warano",
        email: "carineteoi@gmail.com",
        password: "123456789",
        role: "teacher",
    },
]

async function SeedUsers() {

    console.log("--------------- Start seeding of users... -----------------");

    for (const user of users) {
        const exists = await User.findOne({ email: user.email });
        if (!exists) {
            const u = await User.create(user);
            await Settings.create({ user: u._id });
            await createSystemCollections(u._id)
            console.log(`++++++++++++ User ${user.name} created successffully  ! +++++++++++`)
        } else {
            console.log(`---------------- User ${user.name} already exist -----------------`)
        }

    }

    console.log("--------------- Users Seeds ------------------");
}

module.exports = SeedUsers