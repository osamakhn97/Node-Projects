const jwt = require("jsonwebtoken");
const User = require('../model/user');
const auth = async (req,res,next)=>{
try{
const token = req.cookies.jwt;
const verifyUser = jwt.verify(token,process.env.TOKEN_KEY);
console.log(verifyUser);
const user = await User.findOne({_id:verifyUser.user_id});
console.log(user);
next();
}
catch(e){
res.status(401).send(e);

}



}

module.exports = auth



































































// const config = process.env;

// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };

// module.exports = verifyToken;