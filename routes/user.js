const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup",(req,res)=>{
    res.render("user/signup.ejs");
})

router.post("/signup", 
    wrapAsync (async(req,res)=>{
        try{
            let{username,email,password} = req.body;
            const newUser = new User({email,username});
            const regUser = await User.register(newUser , password);
            console.log(regUser);
            req.flash("success","user register");
            res.redirect("/listings");
        }catch(e){
            req.flash("error",e.message);
            res.redirect("/signup");
        }
        
    })
);

router.get("/login",(req,res)=>{
        res.render("user/login.ejs");
});
router.post("/login",
    passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
    wrapAsync(async(req,res)=>{
      req.flash("success","welcome back to Wanderlust!!");
      res.redirect("/listings");
    })
);



module.exports=router;