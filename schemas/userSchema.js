const mongoose = require("mongoose");
const { schema } = require("../model/userModels");
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, requireed: true, unique: true},
    age: { type: Number, required: true},
    password: { type:String, required: true}
})
module.exports = userSchema