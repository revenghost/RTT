const mongoose = require("mongoose");


const TimePunch = new mongoose.Schema
({
    punchType:{
        type: String,
        enum:["IN","OUT"],
        required: true
    },
    userName:{
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
    punchTime:{
        type: Date,
        default: new Date
    }
})

module.exports = mongoose.model("timePunches", TimePunch);

