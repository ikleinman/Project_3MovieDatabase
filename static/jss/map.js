
function createMap(movie_locations) {

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});
// Create a baseMaps object to hold the lightmap layer
var baseMaps = {
  "Light Map": lightmap
};
// Create an overlayMaps object to hold the bikeStations layer
var overlayMaps = {
  "Movie Locations": movie_locations
};

// Create the map object with options
var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [lightmap, movie_locations]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);
}
