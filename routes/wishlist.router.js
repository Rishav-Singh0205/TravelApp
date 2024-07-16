const express = require("express");
const verifyUser = require("../middleware/verifyuser")
const Wishlist = require("../modal/wishlist.modal");
const wishlistController = require("../controllers/wishlistController");
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = wishlistController;
const router = express.Router();


/*--------------Add WishList------------*/
router.route("/")
    .post(verifyUser, createWishlistHandler)

/*----------------Delete From WishList-----------*/

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)
/*-----------------get All WishList------------*/
router.route("/")
    .get(verifyUser, getWishlistHandler)

module.exports = router;