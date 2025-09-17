const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//post route
router.post("/",
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.createReviews)
);

//Delete Route
router.delete("/:reviewId", 
    isLoggedIn,
    isAuthor,
    wrapAsync(reviewController.distroyReview)
);
module.exports = router;