const mongoose = require("mongoose");

const timeStamps = {
    timestamps: true,
    collection: 'Employee'
}
const employeeSchema = new mongoose.Schema({
    name: { type: String },
    task: { type: String },
    startTime: { type: String },
    endTime: { type: String },
}, timeStamps);

module.exports = mongoose.model("Employee", employeeSchema);