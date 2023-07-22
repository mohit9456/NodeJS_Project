const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const Auth = mongoose.Schema({
    name : {
        type: String,
        required: true},
    email : {
        type: String,
        required: true,
        unique: true},
    password: {
        type: String,
        required: true},
});


Auth.methods.createToken = async function(){
    try {
        // console.log(this._id);
        const token = await jwt.sign({_id: this._id}, "fdhkdgfkjghkghkekjghfkshgfkuukfthkrulaehtelkahtkurewhtkuhkfgjhuofg");
        return token;
    } catch (error) {
        console.log(error);
    }
}


Auth.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


module.exports = mongoose.model("auth", Auth)