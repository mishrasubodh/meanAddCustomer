const mongoose = require('mongoose');

//customer  schema
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




const userSChema = mongoose.model('userSChema',UserSChema);
module.exports={userSChema,} 

