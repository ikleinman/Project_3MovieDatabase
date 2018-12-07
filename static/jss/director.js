var url = "http://localhost:5000/data"
var table = d3.select("#director-table");
var tablebody = table.select("tbody");

d3.json(url).then(function(data) {
 console.log(data);

data.forEach((item) => {
  var tablerow = tablebody.append("tr");
  Object.entries(item).forEach(([key,value]) => {
      var tabledivision = tablerow.append("td");
  tabledivision.text(value);})
} ) });


