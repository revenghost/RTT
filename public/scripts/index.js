// JS for index.html page

let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

clockInBtn2.addEventListener("click", function () {
    userPunch("ClockIn");

});
clockOutBtn2.addEventListener("click", function () {
    userPunch("ClockOut");
});

function userPunch(string) {
    let userPunchData = {};
    if (string === "ClockIn") {
        userPunchData.punchType = "IN";
    }
    else if (string === "ClockOut") {
        userPunchData.punchType = "OUT";
    };
    userPunchData.userName = inputName.value;
    userPunchData.pin = parseInt(inputPin.value);
    API.addPunch(userPunchData);

};

function searchUserFunction() {
    var userSearchTextInput = inputName.value;
    if (userSearchTextInput.length > 1) {
        //console.log(userSearchTextInput.length);
        API.searchUser(userSearchTextInput).then((results) => {
            let apiuserresults = results;
            //console.log(apiuserresults);
            popup(apiuserresults);
        })
            .catch((err) => {
                console.log(err);
            });
    };
};

function popup(apiuserresults) {
    let sourceinfo = apiuserresults;
    $("#InputName").autocomplete({
        source: sourceinfo,
        autoFocus: true
    });
};
