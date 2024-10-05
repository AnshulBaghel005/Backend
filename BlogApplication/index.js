const express=require('express');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT||4000;
app.use(express.json())
const blog=require('./routes/blog');
app.use('/api/',blog)
app.get('/',(req,res)=>{
    res.send("Blog application");
    
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
let dbConnect=require('./config/database');
dbConnect();