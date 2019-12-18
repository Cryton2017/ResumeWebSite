//Add an onload event listener:
window.addEventListener("load", function () {

  $(document).ready(function(){
    $("#btnLogin").click(function(){
      $("#confirmation").html("This feature has not been implemented yet!");
      $('#Dialog').modal("show");
        
        //Hide the box when the user clicks close:
      $('#closeBtn').click(function(){
          $('#Dialog').modal("hide");
      });
    }); 
  });

  //Validate the user's email address:
  function validateEmail(email){
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  //Validate the user's password:
  function validatePassword(Password){
    var pattern = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return pattern.test(Password);
  }

  //Check the validation before sending request:
  function checkValidation(){

    //Get the user data:
    var usrEmail = document.getElementById('usrEmail');
    var usrPassword = document.getElementById('usrPassword');

    if(validateEmail(usrEmail.value) && validatePassword(usrPassword.value)){

      //Set the right border colours:
      usrEmail.style.borderColor = "lightgrey";
      usrPassword.style.borderColor = "lightgrey";

      //Send the data:
      sendData();
    }else{

      //Show the Dialog box to the user:
      $(document).ready(function(){
        $("#confirmation").html("The provided information was not in the right format! Please fix the fields marked in red.");
        $('#Dialog').modal("show");

        //Hide the box when the user clicks close:
        $('#closeBtn').click(function(){
          $('#Dialog').modal("hide");
        });
      });

      if(!validateEmail(usrEmail.value)){
        usrEmail.style.borderColor = "red";
      }else{
        usrEmail.style.borderColor = "lightgrey";
      }

      if(!validatePassword(usrPassword.value)){
        usrPassword.style.borderColor = "red";
      }else{
        usrPassword.style.borderColor = "lightgrey";
      }
    }
  }

  //Function to send the data:
  function sendData() {

    //Get the user's inputs:
    var UserName = document.getElementById('userName');
    var Password = document.getElementById('userPassword');

    //Create the new request:
    var XHR = new XMLHttpRequest();
    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {

      //Parse the response to JSON:
      var response = JSON.parse(XHR.responseText);

      //If the response text is YES:
      if(response.STATUS == "YES"){

      }else if(response.STATUS == "NO"){

      }else if(response.STATUS == "QUERYFAIL"){

         
      }
    });

    //Define what happens in case of error:
    XHR.addEventListener("error", function(event) {

      //Show the Dialog box to the user:
      $(document).ready(function(){
        $("#confirmation").html("Network Request Failed. Please try again");
        $('#Dialog').modal("show");

        //Hide the box when the user clicks close:
        $('#closeBtn').click(function(){
          $('#Dialog').modal("hide");
        });
      }); 

    });

    //Setup the request:
    XHR.open("POST", "http://crytech.ddns.net/resume/login.php");
    //The data sent is what the user provided in the form:
    XHR.send(FD);

  }
 
  //Access the form element:
  var form = document.getElementById("loginForm");

  //Take over the forms submit event:
  form.addEventListener("submit", function (event) {
    
    //Prevent defualt action:
    event.preventDefault();
    //Validate the data:
    checkValidation();
    

  });
});