//Add an onload event listener:
window.addEventListener("load", function () {

    $(document).ready(function(){
      $("#Login").click(function(){
        $("#confirmation").html("This feature has not been implemented yet!");
        $('#Dialog').modal("show");
          
          //Hide the box when the user clicks close:
        $('#closeBtn').click(function(){
            $('#Dialog').modal("hide");
        });
      }); 
    });
  });