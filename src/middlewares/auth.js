const jwt = require('jsonwebtoken')
const Register = require('../models/auth')



const auth = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        const verifyUser = jwt.verify(token, "fdhkdgfkjghkghkekjghfkshgfkuukfthkrulaehtelkahtkurewhtkuhkfgjhuofg")
        // console.log(verifyUser);
        // const user = await Register.findOne({_id: verifyUser._id});
        // console.log(user);
        next();
        
    } catch (error) { 
        res.status(401);
        res.redirect("/login");
        console.log(error)
    }
}

module.exports = auth;