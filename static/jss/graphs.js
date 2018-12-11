// Dataset we will be using to set the height of our rectangles.
var url = "http://localhost:5000/data";
 //d3.json(url).then(function(data) {
//   console.log(data);
// });

function makeResponsive() {

// Define SVG area dimensions
var svgWidth = 2000;
var svgHeight = 700;

// Define the chart's margins as an object
var chartMargin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 125
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)}));

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`)



// Load data from flask server
d3.json(url).then(function(data, error) {

data.sort(function(a, b){
    return a["title_year"]-b["title_year"];
});

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
var movieTitle = data.map(item => item.movie_title);
console.log(movieTitle);

console.log(yearList);

var content_Rating = data.map(item => item.content_rating);
console.log(content_Rating);


 //var barSpacing = 10; // desired space between each bar
// scale y to chart height
var yScale = d3.scaleLinear()
  .domain([0, d3.max(grossList)])
  .range([chartHeight, 0]);

// scale x to chart width
var xScale = d3.scaleBand()
  .domain(yearList)
  .range([0, chartWidth])
  .padding(.25);

// create axes
var yAxis = d3.axisLeft(yScale)
.scale(yScale);
var xAxis = d3.axisBottom(xScale)
.scale(xScale);

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
 var group = chartGroup.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", (d, i) => xScale(yearList[i]))
  .attr("y", d => yScale(d.gross))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d.gross))
        // event listener for onclick event
        .on("click", function(d, i) {
          alert(`You clicked ${movieTitle[i]} rated ${content_Rating[i]}and had a gross margin of ${grossList[i]}!`);
        })
        // event listener for mouseover
        .on("mouseover", function() {
          d3.select(this)
                .attr("fill", "red");
        })
        // event listener for mouseout
        .on("mouseout", function() {
          d3.select(this)
                .attr("fill", "green");
        });
    
       // Step 1: Append a div to the body to create tooltips, assign it a class
  // =======================================================
  // Step 1: Append tooltip div
  var toolTip = d3.select("body")
  .append("div")
  .classed("tooltip", true);

// Step 2: Add an onmouseover event to display a tooltip
// ========================================================
group.on("mouseover", function(d) {
  toolTip.style("display", "block")
      .html(
        `<strong>${d.movieTitle}<strong><hr>medal(s) won`)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px");
})
  // Step 3: Add an onmouseout event to make the tooltip invisible
  .on("mouseout", function() {
    toolTip.style("display", "none");
  });   


});

  }

makeResponsive();



