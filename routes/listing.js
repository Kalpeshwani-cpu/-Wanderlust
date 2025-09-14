const express = require("express");
const router = express.Router();
const {listingSchema} = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn} = require("../middleware.js");

const validatelisting = (req,res,next) => {
    let result = listingSchema.validate(req.body);
    let { error } = result;
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
}

//index route
router.get("/",
    wrapAsync(async(req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
})
);

//new form route
router.get("/new", isLoggedIn ,async(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
router.get("/:id", 
    wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
})
);

//create route
router.post("/",
    isLoggedIn,
    validatelisting,
    wrapAsync(async(req,res,next)=>{
        //let{title,description,image,price,location,country} = req.body;
        // let listing = req.body.listing;
        // if(!req.body.listing){
        //     throw new ExpressError(400,"Send Valid Data for listing"); //400 => bad requist
        // }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
        //console.log(listing);
    })
);

//edit route
router.get("/:id/edit",
    isLoggedIn,
    wrapAsync(async(req,res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
})
);

//update route
router.put("/:id", 
    isLoggedIn,
    validatelisting,
    wrapAsync(async(req,res)=>{
    let{id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
})
);

//delete route
router.delete("/:id", 
    isLoggedIn,
    wrapAsync(async(req,res)=>{
    let{id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    //console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
})
);

module.exports = router;
