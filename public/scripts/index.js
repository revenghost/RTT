
let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

clockInBtn2.addEventListener("click",function() {
    userPunch("ClockIn");
   // console.log("you in");

});
clockOutBtn2.addEventListener("click", function() {
    userPunch("ClockOut");
   // console.log("you out");
});

function userPunch(string) {
    let userPunchData = {};
    if(string === "ClockIn") {
        userPunchData.punchType = "IN";
    }
    else if( string === "ClockOut") {
        userPunchData.punchType = "OUT";
    };
    userPunchData.userName = inputName.value;
    userPunchData.pin = parseInt(inputPin.value);
   // console.log(inputPin.value);

    // const jsonresp = 
    API.addPunch(userPunchData);
    // console.log(JSON.stringify(jsonresp)+" in der");

// works to add user into DB
// let userPunchData = {};
// userPunchData.firstName = inputName.value;
// userPunchData.lastName = inputName.value;
// userPunchData.pin = parseInt(inputPin.value);
// userPunchData.EmployeeNumber = parseInt(inputPin.value);
// API.addUser(userPunchData);

};
