window.onload = function () {

  $(document).on('click','#display',function() {               

    //alert("OK") ;
    equipment = $(this).attr("equipment") ;
    if (equipment == 71)
      url_json = '1igag.json' ;
    else
      url_json = '2igag.json' ;
    //alert(equipment) ;
    $.ajax({    //create an ajax request to display.php
      type: "GET",
      url: "/includes/php/tests/display.php?equipment=" + equipment,
      dataType: "html",   //expect html to be returned
      success: function(response)
      {
        // Evaluates the HTML and possible CSS and script inside the DOM (If script not executed use Eval!)
        $("#responsecontainer").html(response);
        //$("#responsecontainer").find("script").each(function(){
          //eval($(this).text());
          //alert("OK") ;
        //});
        //alert(response);
      }

    });


  });

}
