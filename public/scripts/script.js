

function logout() {
    sessionStorage.clear()
    window.location.href = "/";
}
function userPunchValidation(clockInOrOut){
    // console.log("inputName");
    // console.log(inputName.value);
    let inputNameValue = inputName.value;
    let inputPinValue = inputPin.value;

    if(inputNameValue.length>0){
        if(inputPinValue.match(/^\d{4}$/)) {
            if(clockInOrOut === "viewTimecard") {
                loadViewTimecardPage();
            }
            else {
                userPunch(clockInOrOut);
            }
        } 
        else{
            TimePunchPopupMessageTitle.innerHTML = "Error!";
            TimePunchPopupMessage.innerHTML = "Timepunch Failed: Check your Name and Pin. <br>Front end: invalid Pin";
            $("#modal-TimePunch").modal('show');
        }
    }
    else{
        TimePunchPopupMessageTitle.innerHTML = "Error!";
        TimePunchPopupMessage.innerHTML = "Timepunch Failed: Check your Name and Pin. <br>Front end: Invalid Name";
        $("#modal-TimePunch").modal('show');
    }
}

function checkNameAndPinInDB(){
    
}

function userPunch(clockInOrOut) {
    let userPunchData = {};
    if (clockInOrOut === "ClockIn") {
        userPunchData.punchType = "IN";
    }
    else if (clockInOrOut === "ClockOut") {
        userPunchData.punchType = "OUT";
    };
    userPunchData.firstName = inputName.value;
    userPunchData.pin = parseInt(inputPin.value);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toISOString(); // "2020-06-13T18:30:00.000Z"
    userPunchData.punchTime = today.toISOString();

    API.addPunch(userPunchData).then((results) => {
        // let addPunchResults = results;
        // console.log(results);
        if (results === "TimePunchSuccess") {
            resetformlogin();
            TimePunchPopupMessageTitle.innerHTML = "Success!";
            if (clockInOrOut === "ClockIn") {
                TimePunchPopupMessage.innerHTML = "Clocked In";
            }
            else if (clockInOrOut === "ClockOut") {
                TimePunchPopupMessage.innerHTML = "Clocked Out";
            };
        }
        else if (results === "TimePunchFailed") {
            TimePunchPopupMessage.innerHTML = "Timepunch Failed: Check your Name and Pin. Back end";
        };

        $("#modal-TimePunch").modal('show');
    })
        .catch((err) => {
            console.log(err);
            console.log("index.js api.addpunch .catch");
        });

};








//  let clockInBtn = document.getElementById("clockIn");
//  let clockOutBtn = document.getElementById("clockOut");


 
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

//  function alertSelected(btnname) {
//     alert(btnname + "\n" + dateTime);
// };
 

// clockInBtn.addEventListener("click",function() {
//     alertSelected("Clocked in: ");
// });
// clockOutBtn.addEventListener("click", function() {
//     alertSelected("Clocked Out: ");
// });