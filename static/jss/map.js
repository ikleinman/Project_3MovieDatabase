var url = "http://localhost:5000/data";
var data = d3.json(url).then(function(data) {
   console.log(data);
 })

 console.log(data);


function createMap(movie_locations){

var map = L.map("map-id", {
  center: [15.3265, -76.157],
  zoom: 2
});

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

  // Pull the "" property off of response.data
  var locations = response.data.Latitude,;

  // Initialize an array to hold markers
  var markers = [];
