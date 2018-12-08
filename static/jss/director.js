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
  tablebody.selectAll("tr").data(filteredData).exit().remove();
  var tablerow = tablebody.selectAll("tr").data(filteredData)
  tablerow.enter().append("tr").merge(tablerow).html(function(d){
          return `<td>${d.Longtitude}</td><td>${d.Latitude}</td><td>${d.budget}</td><td>${d.content_rating}</td><td>${d.country}</td><td>${d.director_name}</td><td>${d.genres}</td><td>${d.gross}</td><td>${d.movie_title}<td>${d.title_year}</td></td>`;});
  
};

submit.on("click", filterDirectors);
});

     

