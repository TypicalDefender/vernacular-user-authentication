//model for User collection
const mongoose = require('mongoose');
const Joi = require('joi');
const Jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
// userSchema.methods.verify = function(){
//     return Jwt.sign(); 
// }
const userData = mongoose.model('User', userSchema);

function validateUser(user){
   const schema = {
       name : Joi.string().min(5).max(50).required(),
       email : Joi.string().min(8).max(30).required().email(),
       password : Joi.string().min(8).max(50).required()
   }
   return Joi.validate(user, schema);
}

exports.User = userData;
exports.validate = validateUser;