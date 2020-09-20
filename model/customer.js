const mongoose = require('mongoose');
const jwt =require('jsonwebtoken')

//user registration  schema
const UserSChema = new mongoose.Schema({
    Name:{
        type: String,
       },
       age:{
           type: Number
       }
       ,
       Address:{
           type: String
       }
       ,
       phoneNumber:{
           type: Number
       }
       ,
       dateOfBirth:{
           type: Date
       }
});
//login user schema
const Loginuser = new mongoose.Schema({
    Name:{
     type: String,
    },
    age:{
        type: Number
    }
    ,
    Address:{
        type: String
    }
    ,
    phoneNumber:{
        type: Number
    }
    ,
    dateOfBirth:{
        type: Date
    }
 });

//  UserSChema.prototype.generateAuthToken =  function(token){

//      console.log(token,'hkhkjkh')
//   return   jwt.sign({_id: user._id.toString()}, 'subodhmishra',(err,data)=>{
//          if(data){
//             console.log(data)
//             return data
//          }
//      })
     
     
//  }

const userSChema = mongoose.model('userSChema',UserSChema);
const loginuser = mongoose.model('loginuser',Loginuser);
module.exports={
    userSChema,
    loginuser
} 

