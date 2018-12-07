// Dataset we will be using to set the height of our rectangles.
var url = "http://127.0.0.1:5000/data";
// Fetch the JSON data and console log it
function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace = {
      type: "line",
      mode: "lines",
      name: "Graphs",
      x: response.map(data => data.title_year),
      y: response.map(data => data.gross),
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace];

    var layout = {
      title: "Movie Year and Budget Bar Graph",
      xaxis: {
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();





// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });

// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 30,
//   right: 30,
//   bottom: 30,
//   left: 30
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);
// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from movie_data.csv
// d3.csv("../movie_data.csv", function(error, movie_Data) {

//   // Log an error if one exists
//   if (error) return console.warn(error);

//   // Print the tvData
//   console.log(movie_data);

//   // Cast the hours value to a number for each piece of tvData
//   movie_data.forEach(function(data) {
//     data.hours = +data.hours;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // @TODO
//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (movie_data.length - 1))) / movie_data.length;

//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(movie_data)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// });


// C:\Users\ekare\CWCL201807DATA2-Class-Repository-DATA\15-Interactive-Visualizations-and-Dashboards\3\Activities\03-Ins_Fullstack_Flask_Plotly\Solved\static\js
// Plot the default route once the page loads
// var defaultURL = "http://127.0.0.1:5000";
// d3.json(defaultURL).then(function(data) {
//   var data = [data];
//   var layout = { margin: { t: 30, b: 100 } };
//   Plotly.plot("bar", data, layout);
// });

// // Update the plot with new data
// function updatePlotly(newdata) {
//   Plotly.restyle("bar", "x", [newdata.x]);
//   Plotly.restyle("bar", "y", [newdata.y]);
// }

// // Get new data whenever the dropdown selection changes
// function getData(route) {
//   console.log(route);
//   d3.json(`/${route}`).then(function(data) {
//     console.log("newdata", data);
//     updatePlotly(data);
//   });
// }