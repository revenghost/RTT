// JS for index.html page

let clockInBtn2 = document.getElementById("clockIn");
let clockOutBtn2 = document.getElementById("clockOut");
let viewTimecardBtn = document.getElementById("viewTimecardBtn");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");
let TimePunchPopupMessage = document.getElementById("TimePunchPopupMessage");
let TimePunchPopupMessageTitle = document.getElementById("TimePunchPopupMessageTitle");

clockInBtn2.addEventListener("click", function () {
    userPunchValidation("ClockIn");
});
clockOutBtn2.addEventListener("click", function () {
    userPunchValidation("ClockOut");
});
viewTimecardBtn.addEventListener("click", function () {
    userPunchValidation("viewTimecard");
});

function resetformlogin() {
    document.getElementById("TimePunchForm").reset();
};

function loadViewTimecardPage() {
    // console.log("yay");
    sessionStorage.setItem("inputName", inputName.value);
    sessionStorage.setItem("inputPin", inputPin.value);
    window.location.href = "/timeCard";
};

function searchUserFunction() {
    let userSearchTextInput = inputName.value;
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