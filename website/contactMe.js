

//Add an onload event listener:
window.addEventListener("load", function () {

  //Validate the user's email address:
  function validateEmail(email){

    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);

  }

  //Validate the user's name:
  function validateName(name){

    var pattern = /^[a-zA-Z ]*$/;
    return pattern.test(name);
    
  }

  //Validate the selected catagory:
  function validateCatagory(catagory){

    if(catagory != "--Select Category--"){
      return true;
    }else{
      return false;
    }
    
  }

  //Validate the user's query:
  function validateQuery(query){

    var pattern = /^[a-zA-Z0-9,.!?:() ]*$/;
    return pattern.test(query);
    
  }

  //Check that all data is valid:
  function checkValidation(){
    
    //Get the user's inputs:
    var usrEmail = document.getElementById('contactEmail1');
    var usrName = document.getElementById('contactName');
    var selectedCatagory = document.getElementById('contactCatagory');
    var usrQuery = document.getElementById('contactQuery');

    //Check that everything is valid:
    if(validateEmail(usrEmail.value) && validateName(usrName.value) &&
       validateCatagory(selectedCatagory.value) && validateQuery(usrQuery.value)){

      //Set the right border colours:
      usrEmail.style.borderColor = "lightgrey";
      usrName.style.borderColor = "lightgrey";
      selectedCatagory.style.borderColor = "lightgrey";
      usrQuery.style.borderColor = "lightgrey";

      //Send the data:
      sendData();

    }else{

      //Show the Dialog box to the user:
      $(document).ready(function(){
        $("#confirmation").html("The provided information was not in the right format! Please try again with valid data.");
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

      if(!validateName(usrName.value)){
        usrName.style.borderColor = "red";
      }else{
        usrName.style.borderColor = "lightgrey";
      }

      if(!validateCatagory(selectedCatagory.value)){
        selectedCatagory.style.borderColor = "red";
      }else{
        selectedCatagory.style.borderColor = "lightgrey";
      }

      if(!validateQuery(usrQuery.value)){
        usrQuery.style.borderColor = "red";
      }else{
        usrQuery.style.borderColor = "lightgrey";
      }

    }

  }

  //Function to send the data:
  function sendData() {

    //Create the new request:
    var XHR = new XMLHttpRequest();
    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {

      //Parse the response to JSON:
      var response = JSON.parse(XHR.responseText);

      //If the response text is YES:
      if(response.ADDED == "YES"){

        //Show the Dialog box to the user:
        $(document).ready(function(){
          $("#confirmation").html("The request was submitted successfully!");
          $('#Dialog').modal("show");

          //Hide the box when the user clicks close:
          $('#closeBtn').click(function(){
            $('#Dialog').modal("hide");
          });
        }); 
      }else if(response.ADDED == "NO"){
        if(response.STATUS == "VALIDATIONFAIL"){

          //Show the Dialog box to the user:
          $(document).ready(function(){
            $("#confirmation").html("The provided information was not in the right format! Please try again with valid data.");
            $('#Dialog').modal("show");

            //Hide the box when the user clicks close:
            $('#closeBtn').click(function(){
              $('#Dialog').modal("hide");
            });
          }); 

        }else if(response.STATUS == "QUERYFAIL"){

          //Show the Dialog box to the user:
          $(document).ready(function(){
            $("#confirmation").html("Hmmm, Somehting went wrong. Please try again later.");
            $('#Dialog').modal("show");

            //Hide the box when the user clicks close:
            $('#closeBtn').click(function(){
              $('#Dialog').modal("hide");
            });
          }); 
        }
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
    XHR.open("POST", "http://crytech.ddns.net/resume/contactMe.php");
    //The data sent is what the user provided in the form:
    XHR.send(FD);

  }
 
  //Access the form element:
  var form = document.getElementById("contactForm");

  //Take over the forms submit event:
  form.addEventListener("submit", function (event) {
    
    //Prevent defualt action:
    event.preventDefault();
    //Validate the data:
    checkValidation();

  });
});


// $(document).ready(function(){
//   $(documnet).onclick(function(){
//     $("#confirmation").html("The request was submitted successfully!");
//     $('#Dialog').modal("show");
  
//     //Hide the box when the user clicks close:
//     $('#closeBtn').click(function(){
//       $('#Dialog').modal("hide");
//     });
//   }); 
// });



