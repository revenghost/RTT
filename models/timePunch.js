const mongoose = require("mongoose");


const TimePunch = new mongoose.Schema
({
    punchType:{
        // 0 = Punch in, 1 = Punch out
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
        maxlength: 4,
        minlength: 4
    },
    punchTime:{
        type: Date,
        default: new Date
    }
})

module.exports = mongoose.model("timePunches", TimePunch);

