const express = require("express");
const controller = require("./controller");
module.exports = express.Router()
    .post("/creteUser", controller.createUser)
    .post("/loginUser",controller.loginUser)