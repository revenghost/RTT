
 let clockInBtn = document.getElementById("clockIn");
 let clockOutBtn = document.getElementById("clockOut");


 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

 function alertSelected(btnname) {
    alert(btnname + "\n" + dateTime);
};
 

// clockInBtn.addEventListener("click",function() {
//     alertSelected("Clocked in: ");
// });
// clockOutBtn.addEventListener("click", function() {
//     alertSelected("Clocked Out: ");
// });
