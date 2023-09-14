const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    mobile : {
        type : Number
    },
    role : {
        type :String
    },
})

const userModal = mongoose.model("user",userSchema);
module.exports = userModal;