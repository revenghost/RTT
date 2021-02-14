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
            //     var employeeInfo = [];
            //     for (let i = 0; i < data.length; i++) {
            //         employeeInfo.push(data[i].firstName);
            //         employeeInfo.push(data[i].lastName);
            //         employeeInfo.push(data[i].startDate);
            
            var employeeInfo = new Array();
            for (let i = 0; i < data.length; i++) {
                employeeInfo[i] = new Array(data[i].firstName, data[i].lastName, data[i].startDate, data[i].pin);
                }
                res.json(employeeInfo);
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
        var employeeInfo = [];
        for (let i = 0; i < data.length; i++) {
            employeeInfo.push(data[i].firstName);
        }
        res.json(employeeInfo);
    })
    .catch(err => {
        //console.log(err);
        console.error(err);
    });
});


}