const { default: mongoose } = require("mongoose");
const userSchema = require("../schema/userSchema");
const users = mongoose.model('school', userSchema)
module.exports = users