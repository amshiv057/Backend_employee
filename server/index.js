const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const userContent = require("./api/v1/controllers/user/route");
const employeContent = require("./api/v1/controllers/employee/route")

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(cors());
const port = process.env.PORT;
const dbUrl = process.env.DATABASE


mongoose.connect(dbUrl, {

}).then(() => {
    console.log("MongoDB Connection stablished")
})
    .catch((error) => {
        console.log("Some error occurd in mongodb", error);
    })

app.use("/api/v1/user", userContent);
app.use("/api/v1/Employee",employeContent);
app.listen(port, () => {
    console.log("Server is running on port:", port)
})