const db = require("../models");

module.exports = function (app) {

    // comment out when out of development
    // app.get("/api/users", function (req, res) {
    //     db.addUser.find({})
    //         .then(data => {
    //             res.json(data);
    //             //console.log(data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // });

    app.get("/api/manageusers", function (req, res) {
        db.User.find({})
            .then(data => {
                var employeeNames = [];
                for (let i = 0; i < data.length; i++) {
                    employeeNames.push(data[i].firstName);
                }
                res.json(employeeNames);
            })
            .catch(err => {
                console.error(err);
            });
    });

    app.post("/api/punch", function (req, res) {
        
        db.TimePunch.create(req.body)
        .then(data => {
            // console.log("TimePunchSuccess");
            // res.json(data);
            res.json("TimePunchSuccess");
        })
        .catch(err => {
            // console.error(err);
            // console.error("TimePunchFailed");
            res.json("TimePunchFailed");
        });
});


app.post("/api/users", function (req, res) {
        
    db.User.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error(err);
    });
});

// app.delete("/api/deleteUser")

app.get("/api/search", function (req, res) {
    db.User.aggregate([ {
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