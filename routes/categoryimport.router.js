const express = require('express');

const Category = require("../modal/category.modal");
const categories = require("../data/categories")

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            const categoriesDB = await Category.insertMany(categories.data);
            res.json(categoriesDB)
        } catch (err) {
            console.log(err);
            res.json({ message: "Could not add categories to DB" })
        }
    })

module.exports = router;