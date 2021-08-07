const mongoose = require("mongoose");
const notesSchema = {
    name:String,
    email: String,
    phone: String
}
const Note= mongoose.model("Note", notesSchema)
module.exports = Note;