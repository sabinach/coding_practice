/*
var width = 400,
    height = 100;

var data = [10, 15, 20, 25, 30];

// Append SVG 
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

// Create scale
var scale = d3.scaleLinear()
              .domain([d3.min(data), d3.max(data)])
              .range([0, width - 100]);

// Add scales to axis
var x_axis = d3.axisBottom()
               .scale(scale);

//Append group and insert axis
svg.append("g")
   .call(x_axis);
*/

/*
var width = 400, 
    height = 400;

var data = [10, 15, 20, 25, 30];
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var scale = d3.scaleLinear()
              .domain([d3.min(data), d3.max(data)])
              .range([height/2, 0]);

var y_axis = d3.axisLeft()
              .scale(scale);

svg.append("g")
   .attr("transform", "translate(50, 10)")
   .call(y_axis);
*/

var width = 400, height = 400;

var data = [10, 15, 20, 25, 30];
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var xscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width - 100]);

var yscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height/2, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)
