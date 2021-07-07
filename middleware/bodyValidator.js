const {body , validationResult} = require('express-validator'); 


const registerRules = () =>[ 
    body('name', "name is required").notEmpty(), 
    body('email', 'email is required').isEmail(), 
    body('password', 'password must contain at least 6 caracters').isLength({ 
        min : 6 , 
        max : 20
    })
] 

const loginRules = () =>[
    body('email', 'email is required').isEmail(), 
    body('password', 'password must contain at least 6 caracters').isLength({ 
        min : 6 , 
        max : 20
    })
] 

const validator = (req , res , next) =>{ 
    const errors = validationResult(req); 
    if(!errors.isEmpty()){ 
        return res.status(400).json({errors : errors.array()});
    } 
    next()
} 

module.exports = { 
    validator, 
    loginRules, 
    registerRules
}