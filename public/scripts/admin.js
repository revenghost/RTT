
let addUserBtn = document.getElementById("adduser");
let inputName = document.getElementById("InputName");
let inputPin = document.getElementById("InputPin");

addUserBtn.addEventListener("click",function() {
    addUser();
    console.log("you in");

});

function addUser() {
    let addUserData = {};
    addUserData.userName = inputName.value;
    addUserData.pin = parseInt(inputPin.value);
   // console.log(inputPin.value);

    // const jsonresp = 
 API.addUser(addUserData);
    // console.log(JSON.stringify(jsonresp)+" in der");

    
};
