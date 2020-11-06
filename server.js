const express = require("express");
const mongoose = require("mongoose");
const mongodburl = require("./creds");



// NEW BELOW
// const { MongoClient, ObjectID } = require("mongodb");
// const Express = require("express");  already have
// const Cors = require("cors");
// const BodyParser = require("body-parser");
// const { request } = require("express");

// const client = new MongoClient(process.env["mongodb+srv://"+mongodburl.credentials.username+":"+mongodburl.credentials.password+mongodburl.credentials.connectionurl]);
// const server = Express();

// server.use(BodyParser.json());
// server.use(BodyParser.urlencoded({ extended: true }));
// server.use(Cors());

// var collection;

// server.get("/search", async (request, response) => {});
// server.get("/get/:id", async (request, response) => {});

// server.listen("3000", async () => {
//     try {
//         await client.connect();
//         collection = client.db("food").collection("recipes");
//     } catch (e) {
//         console.error(e);
//     }
// });







// NEW ABOVE

mongoose.connect("mongodb+srv://"+mongodburl.credentials.username+":"+mongodburl.credentials.password+mongodburl.credentials.connectionurl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT,() => {
    console.log(`app running on PORT ${PORT}!`);
});