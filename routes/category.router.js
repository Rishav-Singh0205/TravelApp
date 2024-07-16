const express = require("express");
const categoryHandler = require("../controllers/categoryController")

const router = express.Router();


const Category = require("../modal/category.modal");

router.route("/")
    .get(categoryHandler)

module.exports = router;