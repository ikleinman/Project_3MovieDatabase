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
var groubedByCountry=groupBy(saveData, 'country')
console.log(groubedByCountry);

//Looping through country, gross, and budget for tooltip
  var countryGross = []
  var countryBudget = []


  for (var g = 0; g < saveData.length; g++){
    var unicorn = saveData[g]['gross']
    var gross = 0;
    countryGross.push(saveData[g]['gross'])
  };
  console.log(countryGross);
 })

 //console.log(data);
//create map
  var map = L.map("map-id", {
    center: [15.3265, -76.157],
    zoom: 2
  });
function createMap(movie_locations){

  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(map);


};



createMap();

//Creating Markers with data
function createMarkers(response) {

  //var movie_markers = []

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      L.marker([location.Longitude, location.Latitude]).addTo(map);
      //movieMarker.push(movie_markers);
    }
}

};

//Events
