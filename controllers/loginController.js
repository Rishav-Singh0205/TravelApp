const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../modal/user.modal");

const loginHandler = async (req, res) => {
    try {
        const user = await User.findOne({ number: req.body.number })
        !user && res.status(401).json({ message: "Invlide Mobile Number" });

        const decodePassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
        decodePassword !== req.body.password && res.status(401).json({ message: "Incorrect Password" });

        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN)


        res.json({ ...rest, accessToken })
    } catch (error) {
        console.log(error);
    }
}

module.exports = loginHandler;