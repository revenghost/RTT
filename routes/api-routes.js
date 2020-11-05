const db = require("../models");

module.exports = function (app) {

    app.get("/api/users", function (req, res) {
        db.timePunch.find({})
            .then(data => {
                res.json(data);
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    });

    app.post("/api/punch", function (req, res) {
        
        db.timePunch.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.error(err);
        });
});


app.post("/api/users", function (req, res) {
        
    db.addUser.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error(err);
    });
});




}