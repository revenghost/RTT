const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://RTTdbAdmin:JQu7FjCqqlnZDEuZ@cluster0.kvs7o.mongodb.net/RTTDB?retryWrites=true&w=majority", {
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