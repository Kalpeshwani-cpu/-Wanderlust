const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

const validateReview = (req,res,next) => {
    let result = reviewSchema.validate(req.body);
    let { error } = result;
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};


//Reviews
//post route
router.post("/",
    validateReview, 
    wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    
    req.flash("success","Review added successfully!");
    res.redirect(`/listings/${listing._id}`)
}));

//Delete Route
router.delete("/:reviewsId", 
    wrapAsync(async(req,res)=>{
        let {id,reviewsId} = req.params;

        await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewsId}});
        await Review.findByIdAndDelete(reviewsId);
        
        req.flash("success","Review deleted successfully!");
        res.redirect(`/listings/${id}`);
    })
);

module.exports = router;