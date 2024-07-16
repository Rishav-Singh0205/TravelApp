const Category = require("../modal/category.modal");

const categoryHandler = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories)

    } catch (error) {
        res.status(404).json({ message: "Could not find category" })
    }
}
module.exports = categoryHandler;