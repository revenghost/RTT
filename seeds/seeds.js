
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb+srv://RTTdbAdmin:JQu7FjCqqlnZDEuZ@cluster0.kvs7o.mongodb.net/RTTDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    type: 1,
    userName: "Anthrax",
    pin: 1234,
  }
];

db.timePunch.deleteMany({})
  .then(() => db.timePunch.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(JSON.stringify(data.result) + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });