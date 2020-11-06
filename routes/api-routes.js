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

app.get("/api/search", function (req, res) {
    db.addUser.aggregate([ {
        "$search": {
            "autocomplete": {
                "query": req.query.searchterm,
                "path": "firstName",
                "fuzzy": {
                    "maxEdits": 2,
                    "prefixLength": 2
                }
            }
        }
    }])
    .then(data => {
        var employeeNames = [];
        for (let i = 0; i < data.length; i++) {
            employeeNames.push(data[i].firstName);
        }
        res.json(employeeNames);
    })
    .catch(err => {
        //console.log(err);
        console.error(err);
    });
});


}