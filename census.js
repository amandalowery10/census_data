console.log("h@x3d 8y @m&@!");

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "females.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {

    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var D = [headers]

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        data[0] = "US-" + data[0];
        data[1] = Number(data[1]);
        D.push(data)
    }

    google.charts.load('current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
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
        };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }
    // alert(lines);
}

function drawTitle(){

  s = "The quick brown fox jumped over the lazy dog.";
  fill(255);
  text(s, 10, 10, 70, 80); // Text wraps within text box

}
