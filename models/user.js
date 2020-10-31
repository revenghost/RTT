const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addUser = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    pin:{
        type: Number,
        required: true,
        max: 4,
        min: 4
    },
    EmployeeNumber:{
        type: Number,
        required: true,
        max: 4,
        min: 4
    }
});

const addUserModel = mongoose.model("users", addUser);
module.exports = addUserModel;
