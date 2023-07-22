const mongoose = require('mongoose')

const Desc = new mongoose.Schema([{
    comment : String,
}])


module.exports = mongoose.model("Comment", Desc);