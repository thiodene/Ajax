<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/includes/php/common.php');

if (isset($_GET['equipment'])) 
{
  // Get the selected company ID from GET
  $equipment = $_GET['equipment'] ;
}
else
{
  // Use one by default
  $equipment = 31 ;
}

$my_ajax_html = '<button id="addNewSeries">Add New Series</button> 
<button id="removeSeries">Remove Series</button>' ;

$chart_number = 1 ;
list ($sensor_table, $sensor_array, $equipment_name) = buildSensorTable($equipment, $chart_number) ;
$my_ajax_html .= $sensor_table ;
//$my_ajax_html .= displaySensorChart($chart_number) ;
// Add the Chart and table with dynamic display buttons
list ($chart_container_js, $series_to_plot_js) = getPreSavedSensorDataCanvasJS($equipment, 'current') ;

  $my_ajax_script = '<script>
$(document).ready(function() {
 
var chart = new CanvasJS.Chart("chartContainer", { 
  title: {
    text: ""
  },
  backgroundColor: "#F5DEB300",    // Added by Ademir
  axisX: {
    interval: 1
  },
  data: [
    {
      type: "spline",
      dataPoints: [
          { y: 1 },
          { y: 4 },
          { y: 3 },
          { y: 4 }	
      ]
    }
  ]
});
chart.render();	

$("#addNewSeries").click(function () {
   
  var type= "spline";
  var fillOpacity= .4;    
  var dataPoints = [];
  for ( var i = 0; i < 4; i ++ ) {
      dataPoints.push({ y: Math.random() * 10 -5 });
  }
  chart.options.data.push( {type: type, fillOpacity: fillOpacity, dataPoints: dataPoints} );
  chart.render();
    
});

$("#removeSeries").click(function () {
  chart.data[0].remove();
});
 
});
</script>' ;

$my_ajax_html = $my_ajax_script . $my_ajax_html ;
//$my_ajax_html = $my_ajax_html . $my_ajax_script;
//$my_ajax_html = $my_ajax_script ;

echo $my_ajax_html ;

?>
