
let addUserBtn = document.getElementById("adduser");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let pin = document.getElementById("pin");
let employeeNumber = document.getElementById("employeeNumber");
let startDate = document.getElementById("startDate");
let adminFlag = document.getElementById("adminFlag");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

logoutBtn.addEventListener("click", function () {
    logout();
});

function clearfields() {
    document.getElementById("userForm").reset();
}

function addUserFunction() {
    let addUserData = {};
    addUserData.firstName = firstname.value;
    addUserData.lastName = lastname.value;
    addUserData.pin = parseInt(pin.value);
    addUserData.employeeNumber = parseInt(employeeNumber.value);
    addUserData.startDate = JSON.stringify(startDate.value);
    addUserData.admin = adminFlag.checked;
    API.addUser(addUserData);
};


window.onload = pageLoadFunctions;

function pageLoadFunctions() {
    SetLoginVariables();
    adminManageUsers();
};

function SetLoginVariables() {
    if(sessionStorage.getItem("inputName") === null) {
        sessionStorage.clear()
        window.location.href = "/";
    }
    var inputNameSession = sessionStorage.getItem("inputName");
    var inputPinSession = sessionStorage.getItem("inputPin");
    
    InputName.value = inputNameSession;
    inputPin.value = inputPinSession;
};


function adminManageUsers() {
    API.manageUsers().then((results) => {
        let apiallusersresults = results;
        // console.log(apiallusersresults);
        // console.log("sep1");
        // console.log(apiallusersresults[1][1]);
        // console.log("sep2");
        // console.log(apiallusersresults[1][2]);
        loadTableData(apiallusersresults);
    })
};

function loadTableData(items) {
    const table = document.getElementById("adminUserTable");
    for (let i = 0; i < items.length; i++) {
        let row = table.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = "<b>"+items[i][0] + " " + items[i][1]+"</b>";
        let startDate = row.insertCell(1);
        startDate.innerHTML = items[i][2].substring(0, 10);
        let status = row.insertCell(2);
        status.innerHTML = "<img width='24px' src='././media/AdminPage/in.png' alt='ClockedIn'>";
        let lastPunch = row.insertCell(3);
        lastPunch.innerHTML = "2021-02-14 12:41PM";
        let actions = row.insertCell(4);
        actions.innerHTML = 
        "<button type='button' class='btn nopadding' data-toggle='modal' data-target='#AddNewUserModal'><img width='26px' src='././media/AdminPage/edit-c.svg' alt='Edit'></button> <button type='button' class='btn nopadding' data-toggle='modal' data-target='#editTimecard'><img width='24px' src='././media/AdminPage/timecard-c.svg' alt='Timecard'></button> <button type='button' class='btn nopadding' data-toggle='modal' data-target='#AddNotesToUserModal'><img width='24px' src='././media/AdminPage/notes-c.svg' alt='Notes'></button> <button type='button' class='btn nopadding' data-toggle='modal' data-target='#InactivateUserModal'><img width='24px' src='././media/AdminPage/delete-c.svg' alt='Offboard'></button>";
    };
}