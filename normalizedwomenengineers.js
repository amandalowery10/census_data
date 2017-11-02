console.log("h@x3d 8y @m&@!");

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "females.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });

     $("#myBtn").click(function() {
        console.log("clicked");
         $("#myModal").css('display',"block");
     });

     $(".close").click(function(){
       $("#myModal").css('display',"none");
     });

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
    var D = [headers]

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        data[0] = "US-" + data[0];
        data[2] = Number(data[2]);
        D.push(data)
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

      var options =
        {
            region: "US",
            resolution: "provinces",
            colorAxis: {colors: ['#ffffff','#ef3b36']},
            backgroundColor: '#00d2ff',
            datalessRegionColor: '#000000',
            defaultColor: '#f5f5f5',
            height:"450",
            width:"800"
        };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      function myClickHandler(){
          var selection = chart.getSelection();
          console.log(selection);
          console.log(D[selection[0].row+1]);
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
          selectedState = item.row;
      }

      google.visualization.events.addListener(chart, 'select', myClickHandler);

      chart.draw(data, options);
    }
    // alert(lines);
}


// Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
