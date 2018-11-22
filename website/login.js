//Add an onload event listener:
window.addEventListener("load", function () {

  function toggleDropDown() {
    var x = document.getElementById("login");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
  }


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

function toggleDropDown() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}