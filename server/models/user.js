const mongoose = require("mongoose");
const timeStamps = {
    timestamps: true,
    collection: 'user'
}
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    Email:{
        type:String,
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
},
    timeStamps
)

module.exports = mongoose.model('user', userSchema);