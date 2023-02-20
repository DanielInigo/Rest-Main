document.getElementById("phone").addEventListener("keypress", function(event) {
    var key = event.which || event.keyCode;
    if (!(key >= 48 && key <= 57)) {
        event.preventDefault();
    }
});

document.getElementById("date-of-birth").addEventListener("change", function() {
    var date = this.value;
    var enteredDate = new Date(date);
    var startDate = new Date("1920-01-01");
    var endDate = new Date("2010-12-31");
    if (enteredDate < startDate || enteredDate > endDate) {
      alert("Date must be between 1920-01-01 and 2010-12-31. Please enter a valid date.");
      this.value = "";
    }
  });

  var password = document.getElementById("password");
  password.addEventListener("input", function() {
    if (password.value.length > 10) {
        password.value = password.value.substring(0, 10);
        alert("password should not be greater than 10 characters");
      }
    });

  function replaceWithHash(password) {
    password.value = password.value.replace(/./g, "#");
}

document.getElementById("color").addEventListener("change",function(){
    var changeColor=this.value;
    console.log(changeColor);
    var inputElement=document.getElementsByTagName("input");
    for(let i=0;i<inputElement.length;i++){
        inputElement[i].style.color=changeColor;
    }
})

// let password = document.getElementById("password");
// password.addEventListener("onkeyup", function(event) {
//     password.value = "#".repeat(event.target.value.length);
// });

function calculateAge() {
    var birthdate = new Date(document.getElementById("date-of-birth").value);
    var currentDate = new Date();
    var ageInMilliseconds = currentDate - birthdate;
    var ageInYears = ageInMilliseconds / 31557600000;
    document.getElementById("age").value = ageInYears.toFixed(0);
    if (ageInYears > 60) {
        document.getElementById("additional-field").style.display = "flex";
    } else {
        document.getElementById("additional-field").style.display = "none";
    }
}

var selectedDisabilities = [];

function checkSelectedDisabilities() {
    if (document.getElementById("disability-1").checked) {
        selectedDisabilities.push("Can hear");
    }
    if (document.getElementById("disability-2").checked) {
        selectedDisabilities.push("Can see");
    }
    if (document.getElementById("disability-3").checked) {
        selectedDisabilities.push("Can speak");
    }
}

var country = document.getElementById("country");
console.log(country.value);

function Submit() {
    var valEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var username = document.getElementById("username").value;
    var result= valEmail.test(username);
    if (!result) {
        alert("Invalid email address. Please enter a valid email address.");
        document.getElementById("username").value = "";
    }

    var phone = document.getElementById("phone").value;
    var minPhone = 1000000000;
    var maxPhone = 9999999999;
    if (phone < minPhone || phone > maxPhone) {
        alert("Not a valid Phone Number");
        this.value = "";
    }
    var age=document.getElementById("age").value;
    if(age>60){
        checkSelectedDisabilities();
        console.log(selectedDisabilities);
    }
  }

  function keydownFunction() {
    document.getElementById("username").style.backgroundColor = "black";
    document.getElementById("username").style.color = "white";
  }
  
  function keyupFunction() {
    document.getElementById("username").style.backgroundColor = "white";
    document.getElementById("username").style.color = "black";
  }

  $( ".regbut" ).click(function() {
    var color = $( this ).css( "background-color" );
    console.log(color);
    $( "p" ).html( "That div is " + color + "." );
  });




