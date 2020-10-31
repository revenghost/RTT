const express = require("express");
const mongoose = require("mongoose");
const mongodburl = require("./authentication");

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

//test change sam
app.listen(PORT,() => {
    console.log(`app running on PORT ${PORT}!`);
});