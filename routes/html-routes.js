const db = require("../models");
const path = require("path");
module.exports = function(app){
app.get("/alert", function(req, res){
res.sendfile(path.join(__dirname, "../public/pages/timeCard.html"));

});



















}