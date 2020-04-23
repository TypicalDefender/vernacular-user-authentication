const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');


router.post('/signup', async (req, res)=>{
     try{
       const { error } = validate(req.body);
       if(error){
           return res.status(400).send("Invalid input");
       }
       //check if the user with the same email exist or not
       let user = await User.findOne({email :req.body.email});
       if(user){
           return res.status(400).send("User already exists");
       }
       user = new User({
           name : req.body.name,
           email : req.body.email,
           password : req.body.password
       });
       //generate salt for the password
       const salt = await bcrypt.genSalt(10);
       user.password = await bcrypt.hash(req.body.password, salt);
    //    console.log(user.password);
       await user.save();
       res.status(200).send("User logged in successfully");            
     }
     catch(err){
        console.log("some err happened: ", err);
     }
});

//function for login data validation
function validateLogin(data){
    const schema = {
        email : Joi.string().min(5).max(50).required().email(),
        password : Joi.string().min(5).max(50).required()
    }
    return Joi.validate(data, schema)
}
router.post('/login', async (req, res)=>{
    try{
      const { error } = validateLogin(req.body);
      if(error){
          return res.status(400).send("Invalid details");
      }
      const user = await User.findOne({email : req.body.email});
      if(!user){
          return res.status(404).send("Incorrect email or password..check again!");
      }
      const passwordVerify = await bcrypt.compare(req.body.password, user.password);
      if(!passwordVerify){
        return res.status(404).send("Incorrect email or password..check again!");
      }
      return res.status(200).send("User logged in successfully");
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router;