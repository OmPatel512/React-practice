const mongoose = require('mongoose')

var mySchema = new mongoose.Schema({
    uname: String,
    ugender: String
})

var userModel = mongoose.model("users", mySchema);

module.exports = userModel;