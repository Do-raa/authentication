const mongoose = require('mongoose'); 
require('dotenv').config({path : './config/.env'}); 

module.exports = async function (){ 
    try {
          await mongoose.connect(process.env.Mongo_URI , { useNewUrlParser: true , useUnifiedTopology: true }) 
          console.log('the database is connected')
    } catch (error) {
       console.log(error , 'error connection to db') 
    } 
  
}