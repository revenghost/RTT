
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

};




// https://github.com/VassilisPallas/mongoose-fuzzy-searching

    $(function () {
      var employeeNames = [
        "Chelsea",
        "Luis",
        "Laura",
        "Sam",
        "Laurae",
        "Jaime",
        "Kenna Groberg",
        "Andrew Jensen"
      ];
      $("#InputName").autocomplete({
        source: employeeNames,
        autoFocus: true
      });
    });

    $(document).on('keypress', 'input,select', function (e) {
      if (e.which == 13) {
        e.preventDefault();
        var $next = $('[tabIndex=' + (+this.tabIndex + 1) + ']');
        // console.log($next.length);
        if (!$next.length) {
          $next = $('[tabIndex=1]');
        }
        $next.focus().click();
      }
    });


