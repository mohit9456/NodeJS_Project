const mongoose = require("mongoose");
const Blog = mongoose.Schema({
    title : String,
    description : String,
    slug: String,
    linkUrl: String,
    detail_desc: String,
});


module.exports = mongoose.model("blogs", Blog)