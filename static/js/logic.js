
// Creating map object
var map = L.map("map", {
    center: [41.8486645, -87.7355111],
    zoom: 10
  })

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 500,
  id: "mapbox.streets-map",
  accessToken: API_KEY
}).addTo(map);


// Our style object
var mapStyle = {
    color: "white",
    fillColor: "salmon",
    fillOpacity: 0.5,
    weight: 1.5
  };

