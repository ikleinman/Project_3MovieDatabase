var url = "http://localhost:5000/data"
var submit = d3.select("#filter-btn");
var table = d3.select("#director-table");
var tablebody = table.select("tbody");


dataTable = d3.json(url).then(function(d) {
  
 
 
   
function filterDirectors(){
  d3.event.preventDefault();
  var inputElement =d3.select("#director_search");
  var inputValue = inputElement.property("value");
  var filteredData = d.filter(director=> director.director_name === inputValue);
  filteredData.forEach((item) => {
      var tablerow = tablebody.append("tr");
      Object.entries(item).forEach(([key,value]) => {
          var tabledivision = tablerow.append("td");
      tabledivision.text(value);})  
  });
};

submit.on("click", filterDirectors);
});

     

