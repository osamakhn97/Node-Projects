require("dotenv").config();
require("../database/db").connect();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const auth = require("../middleware/auth");

const { urlencoded } = require("body-parser");
const { application } = require("express");
const express = require('express');
const router = express.Router();
const User = require('../model/user');
// router.post("/welcome", auth, (req, res) => {
   
//     res.status(200).send("Welcome 🙌 ");
//   });
router.get('/',(req,res)=>{
    // res.json({name:"Osama", religion:"muslim"})
    res.render('form.hbs')
})
router.get('/secret',auth,(req,res)=>{

 
  res.render('secret')
})
router.post('/register',async (req,res)=>{

console.log(req.body)
try {
    const {first_name, last_name, email, password} = req.body
    if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
      const olduser =await User.findOne({email});
    if(olduser){
        return res.status(409).send("User Already Exist. Please Login");
    }
    
    let encryptedPassword =await bcrypt.hash(password,10)

     const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  const token = jwt.sign(
      {user_id:user.id,email},
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
      );
      user.token = token
      res.cookie("jwt",token,{
        expires: new Date(Date.now() +3000),
        httpOnly:true,
        // secure:true .............for production purpose
      });
      res.status(201).json(user);

    
} catch (error) {
    console.log(error)
}
res.render('thanks')
})
router.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.cookie("jwt",token,{
          expires: new Date(Date.now() +100000),
          httpOnly:true,
          // secure:true .............for production purpose
        });
        
        res.status(200).json(user);
        

        
      }
      else{
      res.status(400).send("Invalid Credentials");}
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
 
module.exports = router;