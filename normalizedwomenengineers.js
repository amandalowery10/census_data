console.log("h@x3d 8y @m&@!");
var graph_title = false;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "females.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });

     $("#slider").click(function(){
        console.log("clicked it dog");
         $("#regions_div").toggle()
         $("#regions_div2").toggle();
         graph_title = !graph_title;

          if(graph_title){
            $("#graph_titlez").text("Normalized Number of Female Engineers per State");
          }else{
            $("#graph_titlez").text("Absolute Number of Female Engineers per State");
          }

     })


     window.onclick = function(event) {
       var modal = document.getElementById("myModal");
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
});

function processData(allText) {

    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var D = [[headers[0],headers[1]]];
    var D2 = [[headers[0],headers[2]]];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        // data[0] =  data[0];
        data[2] = Number(data[2]);
        console.log(data,[data[0],data[1]]);
        D.push([data[0],Number(data[1])]);
        D2.push([data[0],Number(data[2])]);
    }

    google.charts.load('current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See:
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable(D);
      var data2 = google.visualization.arrayToDataTable(D2);

      var options =
        {
            region: "US",
            resolution: "provinces",
            colorAxis: {colors: ['#ffffff','#ef3b36']},
            backgroundColor: '#000000',
            datalessRegionColor: '#000000',
            defaultColor: '#f5f5f5',
            height:"450",
            width:"800"
        };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      var chart2 = new google.visualization.GeoChart(document.getElementById('regions_div2'));

      function myClickHandler(){
          var selection = chart.getSelection();
          // console.log(selection);
          // console.log(D[selection[0].row+1]);
          var message = '';
          for (var i = 0; i < selection.length; i++) {
              var item = selection[i];
              if (item.row != null && item.column != null) {
                  message += '{row:' + item.row + ',column:' + item.column + '}';
              } else if (item.row != null) {
                  message += '{row:' + item.row + '}';
              } else if (item.column != null) {
                  message += '{column:' + item.column + '}';
              }
          }
          if (message == '') {
              message = 'nothing';
          }
          // alert('You selected ' + message);
          console.log(selection[0].row);
          console.log("selected state before:",selectedState);
          selectedState = selection[0].row;
          console.log("selected state after:",selectedState);
      }

      function myClickHandler2(){
          var selection = chart2.getSelection();
          // console.log(selection);
          // console.log(D[selection[0].row+1]);
          var message = '';
          for (var i = 0; i < selection.length; i++) {
              var item = selection[i];
              if (item.row != null && item.column != null) {
                  message += '{row:' + item.row + ',column:' + item.column + '}';
              } else if (item.row != null) {
                  message += '{row:' + item.row + '}';
              } else if (item.column != null) {
                  message += '{column:' + item.column + '}';
              }
          }
          if (message == '') {
              message = 'nothing';
          }
          // alert('You selected ' + message);
          console.log(selection[0].row);
          console.log("selected state before:",selectedState);
          selectedState = selection[0].row;
          console.log("selected state after:",selectedState);
      }

      google.visualization.events.addListener(chart, 'select', myClickHandler);
      google.visualization.events.addListener(chart2, 'select', myClickHandler2);

      chart.draw(data, options);
      chart2.draw(data2, options);
    }
    // alert(lines);
}
