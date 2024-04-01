const express = require("express");
const controller = require("./controller");
module.exports = express.Router()
    .post("/createEmploye", controller.creteEmpoyee)
    .get("/userList", controller.findUserList)
