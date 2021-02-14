// JS for index.html page

let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

clockInBtn2.addEventListener("click", function () {
    userPunchValidation("ClockIn");
});
clockOutBtn2.addEventListener("click", function () {
    userPunchValidation("ClockOut");
});

function userPunchValidation(clockInOrOut){
    var InputName = document.getElementById("InputName").value;
    var InputPin = document.getElementById("InputPin").value;
    if(InputName.length>0){
        if(InputPin.match(/^\d{4}$/)) {
            userPunch(clockInOrOut);
        } 
        else{
            TimePunchPopupMessage.innerHTML = "Timepunch Failed: Check your Name and Pin. <br>Front end: invalid Pin";
            $("#modal-TimePunch").modal('show');
        }
    }
    else{
        TimePunchPopupMessage.innerHTML = "Timepunch Failed: Check your Name and Pin. <br>Front end: Invalid Name";
        $("#modal-TimePunch").modal('show');
    }
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
        var TimePunchPopupMessage = document.getElementById("TimePunchPopupMessage");
        if (results === "TimePunchSuccess") {
            document.getElementById("TimePunchForm").reset();
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

/* START: Timepunch Modal JS */
// Get the modal
// var modal = document.getElementById("modal-TimePunch");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close-TimePunch")[0];
// // When the user clicks on <span> (x), close the modal
// // span.onclick = function() {
// //   modal.style.display = "none";
// // }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
/* FINISH: Timepunch Modal JS */