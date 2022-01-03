const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');


router.get('/', (req , res)=> {
    res.send('Hello World');
});

// Registration
// store data in database 

// Using promises
// router.post('/register' , (req , res) => {

//     const { name,email,phone,work,password,cpassword } = req.body ;

//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json({error:"plz fill all fields properly"});
//     }

//     User.findOne({email : email}).then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email already Exist"});
//         }

//         const user = new User({ name,email,phone,work,password,cpassword });

//         user.save().then( () => {
//             res.status(201).json({message:"User Registered Successfully"});
//         }).catch( (err) => res.status(500).json({error:"Failed to Register"}));


//     }).catch( (err) => console.log(err) );

// //     console.log(req.body);
// //     console.log(name);
// //    res.json({message: req.body});
// });

// Using Async await
router.post('/register' , async (req , res) => {

    const { name,email,phone,work,password,cpassword } = req.body ;

    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error:"plz fill all fields properly"})
    }
    
    try{
        const userExist = await User.findOne({email : email});
       
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Passwords are not matching"});
        }else{
            const user = new User({ name,email,phone,work,password,cpassword });
        
        // Hashing Password middleware

        // Save Data to Database
        const userRegister = user.save();

        if(userRegister){
            res.status(201).json({message:"User Registered Successfully"});
        }else{
            res.status(500).json({error:"Failed to Register"});
        }
    }
 } catch(err){ console.log(err); }
});


//  Login

router.post('/signin' , async (req , res) => {
    // console.log(req.body);
    // res.json({message:'sent'});

    try{
        let token;
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:'Please fill fields properly'});
        }

        const userLogin = await User.findOne({ email: email });
        if(userLogin)
        {
            // Entered password and stored password checking for equality
            const isMatch = await bcrypt.compare(password , userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000) ,
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:'Invalid Credentials pass'});
            }else{
                res.status(200).json({message:'User Login Successful'});
            }
        }
        else{
            res.status(400).json({error:'Invalid Credentials'});
        }
        
    }
    catch(err){
        console.log(err);
    }
});


module.exports = router;