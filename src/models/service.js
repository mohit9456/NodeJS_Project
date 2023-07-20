const mongoose = require("mongoose");

const Service = mongoose.Schema({
    icon: String,
    imageUrl: String,
    title : String,
    description : String,
    slug: String,
    linkUrl: String,
    detail_desc1: String,
    detail_desc2: String,
    detail_desc3: String,
    detail_desc4: String,
    link: String
});


module.exports = mongoose.model("service", Service)