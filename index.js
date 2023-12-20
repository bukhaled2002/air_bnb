const express = require("express");
const app = express();
const userRouter= require("./routes/user.route")
const reviewsRouter = require("./routes/review.route");
const placeRouter = require("./routes/place.route");
const amentiyRouter= require("./routes/amenity.route")
const cityRouter= require("./routes/city.route")
const placeAmenityRouter= require("./routes/place_amenity.route")
const stateRouter= require("./routes/state.route")
const cors = require("cors")

app.use(cors({
    origin :"http://localhost:5173",
    credentials:true
}))
app.use(express.json());

app.use(userRouter)
app.use(reviewsRouter);
app.use(placeRouter);
app.use(amentiyRouter);
app.use(cityRouter);
app.use(cityRouter);
app.use(placeAmenityRouter);
app.use(stateRouter);


const mongoose = require("mongoose");


function dbConnection(){
    // mongoose.connect("mongodb://127.0.0.1:27017/test")
mongoose.connect("mongodb+srv://rawanakhalid11-11:8mBtr7xSR0Dc3LMl@cluster0.7188tvk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log("connected successfully");
}).catch((error)=>{ 
    console.log("error with connecting to database: " + error)
});
}



app.listen(3000,() => {
console.log("iam listening on port 3000");
    dbConnection()
});