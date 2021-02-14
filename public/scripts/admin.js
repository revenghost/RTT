
let addUserBtn = document.getElementById("adduser");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let pin = document.getElementById("pin");
let employeeNumber = document.getElementById("employeeNumber");
let startDate = document.getElementById("startDate");

function clearfields() {
    document.getElementById("userForm").reset();
}

function addUserFunction() {
    let addUserData = {};
    addUserData.firstName = firstname.value;
    addUserData.lastName = lastname.value;
    addUserData.pin = parseInt(pin.value);
    addUserData.EmployeeNumber = parseInt(employeeNumber.value);
    addUserData.startDate = JSON.stringify(startDate.value);
    API.addUser(addUserData);
};


function adminManageUsers() {
    API.manageUsers().then((results) => {
        let apiallusersresults = results;
        console.log(apiallusersresults);
    })
};
