const CryptoJS = require('crypto-js');
const User = require("../modal/user.modal")


const sighupController = async (req, res) => {
    const { username, number, email } = req.body;
    if (!username || !number || !email || !password) {
        res.status(401).json("All Inputs is required")
    }
    try {
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });



        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating a user" })
    }
}

module.exports = sighupController;