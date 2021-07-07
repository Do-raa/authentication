const router = require ('express').Router(); 
const User = require('../model/User'); 
const bcrypt = require('bcrypt');
const {validator , loginRules, registerRules} = require('../middleware/bodyValidator'); 
const jwt = require('jsonwebtoken'); 
const isAuth = require('../middleware/isAuth')


router.post('/register',registerRules(), validator ,  async (req,res)=>{  
    const {name, email , password}= req.body 
    
    try {
        let user =await User.findOne({email}) 
        if (user){ 
        return   res.status(400).send({msg : "user already exist"});
        } 
       
        user = new User ({ 
            name , email , password
        })  

        //hash the password 
        const salt = 10;  
        const hashedpassword = await bcrypt.hash(password , salt); 
        user.password = hashedpassword;
       
        await user.save() 
        res.status(200).send({msg : "user saved" , user})
    } catch (error) {
        res.status(500).send({msg : "error server"}) 
    }
    res.send({msg:'register'})
}) 


router.post('/login', loginRules(), validator , async (req,res)=>{  
    const {email ,password} = req.body ; 
    try {
        const user = await User.findOne({email}) 
        if(!user){ 
            return  res.status(400).send({msg:'bad credential'})
        } 
        const isMatch = await bcrypt.compare(password , user.password) 
        if(!isMatch){ 
            return  res.status(400).send({msg:'bad credential'})
        }  
      
        const payload = { 
            _id : user._id
        } 
        const token = await jwt.sign(payload, process.env.secretOrKey)
        
        res.status(200).send({msg:'login success' , user , token})
    } catch (error) {
        res.status(500).send({msg : "error server"}) 
    }
  
})  

router.get('/me' , isAuth , (req,res)=>{ 
    res.status(200).send({user : req.user})
})

module.exports = router 