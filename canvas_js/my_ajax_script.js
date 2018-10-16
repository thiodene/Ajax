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
