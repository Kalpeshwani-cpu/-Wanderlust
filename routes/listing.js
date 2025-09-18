const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");
const lisitngController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//this is use for combine the same path function. exp
//index route
//router.get("/",wrapAsync(lisitngController.index));
//create route
//router.post("/",isLoggedIn,validatelisting,wrapAsync(lisitngController.createListing));
router
    .route("/")
    .get(wrapAsync(lisitngController.index))
    .post(isLoggedIn,
        upload.single("listing[image]"),
        validatelisting,
        wrapAsync(lisitngController.createListing)
    );

//new form route
router.get("/new", isLoggedIn ,lisitngController.newForm);


router  
    .route("/:id")
    //show route
    .get(wrapAsync(lisitngController.show))
    //update route
    .put(isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validatelisting, 
        wrapAsync(lisitngController.updateListing)
    )
    //delete route
    .delete(isLoggedIn, isOwner, wrapAsync(lisitngController.distroyListing));

//edit route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(lisitngController.renderEdit)
);
module.exports = router;
