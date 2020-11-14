
let mongoose = require("mongoose");
let db = require("../models");
let mongodburl = require("../creds")

mongoose.connect("mongodb+srv://"+mongodburl.credentials.username+":"+mongodburl.credentials.password+mongodburl.credentials.connectionurl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

let userSeed = [
  {
    punchType: "IN",
    userName: "Anthrax",
    pin: 1234
  },
  {
    punchType: "IN",
    userName: "Anthrax",
    pin: 1234
  },
  {
    punchType: "IN",
    userName: "Anthrax",
    pin: 1234
  }
];


db.TimePunch.deleteMany({})
  .then(() => db.TimePunch.create(userSeed))
  .then(data => {
    console.log("Seed records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });