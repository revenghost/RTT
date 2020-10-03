const db = require("../models");
const path = require("path");
module.exports = function(app){
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/timeCard", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/timeCard.html"));
});

















}