const Jwt = require('jsonwebtoken');


module.exports = function (req, res, next){
   const token = req.header('x-auth-token');
   if(!token){
       return res.status(404).send("Access denied");
   }
   try{
     const verifyData = Jwt.verify(token, "jwtPrivateKey");
     req.user = verifyData;
     next();
   }
   catch(ex){
     return res.status(400).send("Invalid token");
   }
}
