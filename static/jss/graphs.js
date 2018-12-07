// Dataset we will be using to set the height of our rectangles.
var url = "http://127.0.0.1:5000/data";
 //d3.json(url).then(function(data) {
//   console.log(data);
// });


// Define SVG area dimensions
var svgWidth = 1000;
var svgHeight = 1000;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from flask server
d3.json(url).then(function(data, error) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the Data
  console.log(data);

  // Cast the movie gross value to a number for each piece of Data
  data.forEach(function(movie_data) {
    movie_data.gross = +movie_data.gross;});

// Call the custom function with filter()
var grossList = data.map(item => item.gross);
console.log(grossList);
var yearList = data.map(item => item.title_year);


 //var barSpacing = 10; // desired space between each bar
// scale y to chart height
var yScale = d3.scaleLinear()
  .domain([0, d3.max(grossList)])
  .range([chartHeight, 0]);

// scale x to chart width
var xScale = d3.scaleBand()
  .domain(yearList)
  .range([0, chartWidth])
  .padding(0.05);

// create axes
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

// set x to the bottom of the chart
chartGroup.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(xAxis);

// set y to the y axis
// This syntax allows us to call the axis function
// and pass in the selector without breaking the chaining
chartGroup.append("g")
  .call(yAxis);


  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  //var barWidth = (chartWidth - (barSpacing * (data.length - 1))) / data.length;

  // Create code to build the bar chart using the movie Data.
  chartGroup.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", (d, i) => xScale(yearList[i]))
  .attr("y", d => yScale(d.gross))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d.gross));
});

