// JS for timeCard.html page

let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

clockInBtn2.addEventListener("click", function () {
    // console.log("yer")
    userPunchValidation("ClockIn");
});
clockOutBtn2.addEventListener("click", function () {
    userPunchValidation("ClockOut");
});
logoutBtn.addEventListener("click", function () {
    logout();
});
function resetformlogin() {
}

window.onload = SetLoginVariables();

function SetLoginVariables() {
    if(sessionStorage.getItem("inputName") === null) {
        sessionStorage.clear()
        window.location.href = "/";
    }
    var inputNameSession = sessionStorage.getItem("inputName");
    var inputPinSession = sessionStorage.getItem("inputPin");
    
    InputName.value = inputNameSession;
    inputPin.value = inputPinSession;
}

