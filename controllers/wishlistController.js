const Wishlist = require("../modal/wishlist.modal");

const createWishlistHandler = async (req, res) => {
    const newWishlist = new Wishlist(req.body);
    try {
        const saveWishList = await newWishlist.save();
        res.status(201).json(saveWishList);
    } catch (error) {
        res.status(401).json({ message: "failed to create wishList" })
    }
}

const deleteWishlistHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Delete from WishList" })
    } catch (error) {
        res.status(500).json({ message: "Could not Delete hotel from WishList" })
    }
}

const getWishlistHandler = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({});
        wishlist ? res.json(wishlist) : res.json({ message: "No Item found in the WishList" })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };