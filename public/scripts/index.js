
let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

clockInBtn2.addEventListener("click",function() {
    init("ClockIn");
   // console.log("you in");

});
clockOutBtn2.addEventListener("click", function() {
    init("ClockOut");
   // console.log("you out");
});

function init(string) {
    let userData = {};
    if(string === "ClockIn") {
        userData.punchType = "IN";
    }
    else if( string === "ClockOut") {
        userData.punchType = "OUT";
    };
    userData.userName = inputName.value;
    userData.pin = parseInt(inputPin.value);
    // userData.buttface = "butt"
   // console.log(inputPin.value);

    // const jsonresp = 
 API.createUser(userData);
    // console.log(JSON.stringify(jsonresp)+" in der");

    
};
