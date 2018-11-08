

//Add an onload event listener:
window.addEventListener("load", function () {

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
    //Send the data:
    sendData();

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



