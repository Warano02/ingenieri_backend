const mongoose = require("mongoose");
const RessourcesSchema = new mongoose.Schema({
    title: mongoose.Schema.Types.String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    attachment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attachment",
    },
    isLink: mongoose.Schema.Types.Boolean,
    link: mongoose.Schema.Types.String,
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("Ressource", RessourcesSchema)