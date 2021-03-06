const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
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
        min: 1000,
        max: 9999
    },
    EmployeeNumber:{
        type: Number,
        required: true,
        min: 1000,
        max: 9999
    },
    agency:{
        type: String
    },
    startDate:{
        type: Date,
        required:true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model("users", User);