$(document).ready(function() {

  $(document).on('click','#display',function() {                
    //alert("OK") ;
    equipment = $(this).attr("equipment") ;
    //alert(equipment) ;
    $.ajax({    //create an ajax request to display.php
      type: "GET",
      url: "/includes/php/tests/display.php?equipment=" + equipment,             
      dataType: "html",   //expect html to be returned                
      success: function(response)
      {                    
        $("#responsecontainer").html(response); 
        //alert(response);
      }

    });
  });
});
