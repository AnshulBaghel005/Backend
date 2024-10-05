const mongoose=require('mongoose');
require('dotenv').config
const dbConnect=()=>{
         mongoose.connect(process.env.DATABASE_URL)
         .then(()=>{
            console.log("DB connection successful");

         })
         .catch((err)=>{
            console.log(err);
            console.log("DB connection me error hai")
         })
        }


module.exports=dbConnect;        

