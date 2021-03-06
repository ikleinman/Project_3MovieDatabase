//create map
  var map = L.map("map-id", {
    center: [15.3265, -76.157],
    zoom: 2
  });

var outputObject = [];

var url = "http://localhost:5000/data";

var saveData;
d3.json(url).then(function(data) {
  console.log(data);

  createMarkers(data)
  saveData = data;

  //Groupby Country in data
  var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var groupedByCountry = groupBy(saveData, 'country')
console.log(groupedByCountry);

//Looping through country, gross, and budget for tooltip



 //var unicorn = saveData[g]['country']
  for(const [key, value] of Object.entries(groupedByCountry)){
    var gross = 0;
    var budget = 0;
    var lat = 0;
    var long = 0;
    console.log(value);
    value.forEach(function(row){
      console.log(row.gross);
      gross += row.gross;
      budget += parseFloat(row.budget);
      lat = row.Latitude;
      long = row.Longitude;

  });
  outputObject.push({'country': key,
                     'gross': gross,
                      'budget': budget,
                      'Lat': lat,
                      'long': long});

}

console.log(outputObject);

function createMap(movie_locations){

  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(map);


}

createMap();
});

//Creating Markers with data
function createMarkers(outputObject) {

var tooltips = [];
  for (var i = 0; i < outputObject.length; i++) {
    var location = outputObject[i];

    //if (location) {
      var marker = L.marker([location.Longitude, location.Latitude]).addTo(map);
        marker.bindPopup("<h3>Country: " + location.country + "<h3><h3>Gross Earnings: " + location.gross + "<h3><h3>Total Budget: " + location.budget);

    tooltips.push(marker);
    createMarkers(L.layerGroup(tooltips));

}

}
