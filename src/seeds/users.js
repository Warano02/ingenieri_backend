const Users = require("../models/user.model")
const users = [
    {
        name: "Felix Warano",
        email: "carineteoi@gmail.com",
        password: "123456789",
        role: "admin",
    },
    {
        name: "Mabou Azareel",
        email: "mabouazareel@gmail.com",
        password: "123456789",
        role: "teacher",
    },
    {
        name: "Ayi Kane",
        email: "ayimvogo@gmail.com",
        password: "123456789",
        matricule: "23A529FS",
        role: "student",
    },
    {
        name: "Ngachou Ulrich",
        email: "ulrichlandry722@gmail.com",
        password: "123456789",
        matricule: "23A674FS",
        role: "student",
    },
]
async function SeedUser() {
    for (const user of users) {
        try {
            await Users.create(user)
            console.log(user.name + " Created successfully!")
        } catch (e) {
            console.log("Error occurd while trying to insert " + user.name, e)
        }
    }
}

module.exports = SeedUser