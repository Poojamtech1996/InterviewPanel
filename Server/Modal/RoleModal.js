const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role : {
        type : String
    }
})

const roleModal = mongoose.model("role",roleSchema);
module.exports = roleModal;