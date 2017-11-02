selectedState = -1;
var sketch1 = function(p){
  var maxData;
  var data = [];
  var rawData = [];
  var targetRow = 4
  var table;
  p.preload = function(){
    table = p.loadTable("Census_Data_FemaleHouseholds.csv", "csv");
  }

  p.setup = function() {
    p.createCanvas(400, 400);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    // canvas.parent('sketch-holder');

    p.angleMode(p.DEGREES);
    p.rectMode(p.BOTTOM);

    for (var c = 3; c < table.getColumnCount(); c++) {
      if (c % 2 == 1){
        console.log(table.getString(0,c));
        var count = parseInt(table.getString(targetRow, c).replace(/,/g, ''),10);
        var total = parseInt(table.getString(2, c).replace(/,/g, ''),10);
        console.log(count/total);
        data.push(count/total);
        rawData.push(count);
      }

    }

    maxData = p.max(data);


  }

  p.draw = function () {
    // p.background(43, 53, 63);
    p.background(255, 255, 255);
    p.fill(139, 171, 203);
    p.stroke(89, 86, 74);

    p.push();
    // p.stroke(255, 255, 128);
    p.translate(p.width / 2, p.height / 2);
    if(selectedState >= 0){
      p.text(rawData[selectedState],-10,0);
    }
    p.pop();


    var angleSeparation = 360 / data.length;
    var padding = 10;

    if (p.frameCount <= 400) {
      maxValue = p.constrain(p.frameCount * 2, 0, 400);
    } else {
      maxValue = 400;
    }
    var offset = 150;
    var dataMultiplier = (p.height/2-offset-padding) / maxData;

    for (var i = 0; i < data.length; i = i + 1) {
      p.push();
      if(i == selectedState){
        p.fill(100, 100, 100);
        p.stroke(89, 86, 74);

      }
      var currentData = data[i];
      var finalHeight = currentData * dataMultiplier;
      var animatedHeight = p.map(maxValue, 0, 400, 0, finalHeight);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(angleSeparation * i + -90);
      p.rect(0, offset, angleSeparation*2, animatedHeight);
      // text(Math.floor(currentData), offset-20, 0);

      p.text(i+1, 0,offset-10);

      p.pop();
    }
  }
}

var sketch2 = function(p){
  var maxData;
  var data = [];
  var rawData = [];
  var targetRow = 7
  var table;
  p.preload = function(){
    table = p.loadTable("Census_Data_FemaleHouseholds.csv", "csv");
  }

  p.setup = function() {
    p.createCanvas(400, 400);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    // canvas.parent('sketch-holder');

    p.angleMode(p.DEGREES);
    p.rectMode(p.BOTTOM);

    for (var c = 3; c < table.getColumnCount(); c++) {
      if (c % 2 == 1){
        console.log(table.getString(0,c));
        var count = parseInt(table.getString(targetRow, c).replace(/,/g, ''),10);
        var total = parseInt(table.getString(2, c).replace(/,/g, ''),10);
        console.log(count/total);
        data.push(count/total);
        rawData.push(count);
      }

    }

    maxData = p.max(data);


  }

  p.draw = function () {
    // p.background(43, 53, 63);
    p.background(255, 255, 255);
    p.fill(139, 171, 203);
    p.stroke(89, 86, 74);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    if(selectedState >= 0){
      p.text(rawData[selectedState],-10,0);
    }
    p.pop();


    var angleSeparation = 360 / data.length;
    var padding = 10;

    if (p.frameCount <= 400) {
      maxValue = p.constrain(p.frameCount * 2, 0, 400);
    } else {
      maxValue = 400;
    }
    var offset = 150;
    var dataMultiplier = (p.height/2-offset-padding) / maxData;

    for (var i = 0; i < data.length; i = i + 1) {
      p.push();
      if(i == selectedState){
        p.fill(100, 100, 100);
        p.stroke(89, 86, 74);

      }
      var currentData = data[i];
      var finalHeight = currentData * dataMultiplier;
      var animatedHeight = p.map(maxValue, 0, 400, 0, finalHeight);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(angleSeparation * i + -90);
      p.rect(0, offset, angleSeparation*2, animatedHeight);
      // text(Math.floor(currentData), offset-20, 0);
      p.text(i+1, 0,offset-10);

      p.pop();
    }
  }
}

var sketch3 = function(p){
  var maxData;
  var data = [];
  var rawData = [];
  var targetRow = 10
  var table;
  p.preload = function(){
    table = p.loadTable("Census_Data_FemaleHouseholds.csv", "csv");
  }

  p.setup = function() {
    p.createCanvas(400, 400);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    // canvas.parent('sketch-holder');

    p.angleMode(p.DEGREES);
    p.rectMode(p.BOTTOM);

    for (var c = 3; c < table.getColumnCount(); c++) {
      if (c % 2 == 1){
        console.log(table.getString(0,c));
        var count = parseInt(table.getString(targetRow, c).replace(/,/g, ''),10);
        var total = parseInt(table.getString(2, c).replace(/,/g, ''),10);
        console.log(count/total);
        data.push(count/total);
        rawData.push(count);
      }

    }

    maxData = p.max(data);


  }

  p.draw = function () {
    // p.background(43, 53, 63);
    p.background(255, 255, 255);
    p.fill(139, 171, 203);
    p.stroke(89, 86, 74);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    if(selectedState >= 0){
      p.text(rawData[selectedState],-10,0);
    }
    p.pop();


    var angleSeparation = 360 / data.length;
    var padding = 10;

    if (p.frameCount <= 400) {
      maxValue = p.constrain(p.frameCount * 2, 0, 400);
    } else {
      maxValue = 400;
    }
    var offset = 150;
    var dataMultiplier = (p.height/2-offset-padding) / maxData;

    for (var i = 0; i < data.length; i = i + 1) {
      p.push();
      if(i == selectedState){
        p.fill(100, 100, 100);
        p.stroke(89, 86, 74);

      }
      var currentData = data[i];
      var finalHeight = currentData * dataMultiplier;
      var animatedHeight = p.map(maxValue, 0, 400, 0, finalHeight);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(angleSeparation * i + -90);
      p.rect(0, offset, angleSeparation*2, animatedHeight);
      // text(Math.floor(currentData), offset-20, 0);
      p.text(i+1, 0,offset-10);

      p.pop();
    }
  }
}



var mySketch1 = new p5(sketch1,"sketch-holder");
var mySketch2 = new p5(sketch2,"sketch-holder2");
var mySketch3 = new p5(sketch3,"sketch-holder3");
