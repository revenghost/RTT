const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimePunch = new Schema({
    punchType:{
        // 0 = Punch in, 1 = Punch out
        type: Number,
        // required: true
    },
    userName:{
        type: String,
        // required: true,
        trim: true
    },
    pin:{
        type: Number,
        // required: true,
        max: 4,
        min: 4
    },
    punchTime:{
        type: Date,
        default: new Date
    }
});

const timePunchModel = mongoose.model("timePunches", TimePunch);
module.exports = timePunchModel;
