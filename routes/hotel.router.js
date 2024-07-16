const express = require("express");

const router = express.Router();


const getAllHotelHandler = require("../controllers/hotelControoler");


router.route("/")
    .get(getAllHotelHandler)

module.exports = router;