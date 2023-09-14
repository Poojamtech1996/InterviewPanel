const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    name :{
      type : String,
    }
});
const technologyModal = mongoose.model("Technology", technologySchema);
module.exports = technologyModal;