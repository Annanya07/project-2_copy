// Create a map object
var myMap = L.map("map", {
  center: [41.87, -87.62],
  zoom: 10
});

// Add a tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  mapZoom: 12,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Our style object
var mapStyle = {
    color: "white",
    fillColor: "salmon",
    fillOpacity: 0.5,
    weight: 1.5
  };

  function createMarkers(response) {

    // Pull the "stations" property off of response.data
    var listings = response.data.stations;
  
    // Initialize an array to hold bike markers
    var listMarkers = [];
  
    // Loop through the stations array
    for (var index = 0; index < listings.length; index++) {
      var listing = listings[index];
  
      // For each station, create a marker and bind a popup with the station's name
      var listMarker = L.marker([listing.latitude, listing.longitude])
        .bindPopup("<h3>" + listing.id + "<h3><h3>Rating: " + listing.rating + "<h3><h3>Revenue: " + listing.price);
  
      // Add the marker to the bikeMarkers array
      listMarkers.push(listMarker);
    }
  
    // Create a layer group made from the bike markers array, pass it into the createMap function
    createMap(L.layerGroup(listMarkers));
  }

d3.csv("../Resources/listings2.csv", createMarkers)