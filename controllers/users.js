const User = require("../models/user");


module.exports.renderSignup = (req,res)=>{
    res.render("user/signup.ejs");
};

module.exports.signup = async(req,res)=>{
    try{
        let{username,email,password} = req.body;
        const newUser = new User({email,username});
        const regUser = await User.register(newUser , password);
        req.login(regUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome To Wanderlust");
            res.redirect("/listings");
        })
        
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
};

module.exports.renderLogin = (req,res)=>{
        res.render("user/login.ejs");
};

module.exports.login = async(req,res)=>{
    req.flash("success","welcome Back To Wanderlust!!");
    let redirectUrl = res.locals.redirectUrl || "/listings" || `/listings/${req.params.id}`;
    res.redirect(redirectUrl);
};


module.exports.logOut = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    })
};

