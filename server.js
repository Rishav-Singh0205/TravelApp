const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require("./config/dbconfig");
const hotelDataAddToDBRouter = require("./routes/dataimport.router")
const categoryDataAddToDBRouter = require("./routes/categoryimport.router")

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router")
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.router");
const WishlistRouter = require("./routes/wishlist.router")

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500


app.get("/", (req, res) => {
    res.send("Hello Rishav");
});



app.use("/api/hotels", hotelRouter);
app.use("/api/hoteldata", hotelDataAddToDBRouter)
app.use("/api/categorydata", categoryDataAddToDBRouter)
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", WishlistRouter)

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log(`server is running on PORT ${PORT}`);
    })
})

