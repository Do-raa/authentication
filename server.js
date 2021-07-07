const express = require('express') ; 
const app = express() ; 
const port = process.env.PORT || 5000 ;  
const connectDB = require ('./config/connectDB'); 
const authRouter = require ('./route/Auth')


app.use(express.json())
connectDB(); 
app.use('/api/auth' , authRouter)
app.listen(port , (err)=>{ 
    err ? console.log(err) : console.log(`the server is running on port ${port}`)
})