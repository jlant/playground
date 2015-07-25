// coords
var coords = [38.2542376, -85.759407]

var louisville = {
    "lat": 38.2542376,
    "lon": -85.759407
}
// initialize the map with centered coords and set a zoom level
// var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map').setView([louisville.lat, louisville.lon], 13);

// add a tile layer from MapBox Streets
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jlant.n060cn4f',
    accessToken: 'pk.eyJ1IjoiamxhbnQiLCJhIjoiaUVDZTh0MCJ9.Ml8pououQseLTfrQfUvX-Q'
}).addTo(map);

// add a tile layer from OpenStreetMap
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
// }).addTo(map);

// add a tile layer from OpenTopoMap
// var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 16,
// 	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });
//
// OpenTopoMap.addTo(map);

// var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
// 	subdomains: 'abcd',
// 	maxZoom: 19
// });
//
// CartoDB_DarkMatter.addTo(map)

// add a marker with a pop up
var marker = L.marker(coords).addTo(map)
marker.bindPopup("<b>Hello Leaflet!</b><br>I am a popup.").openPopup();

// add a circle
var circle = L.circle([coords[0] + 0.001, coords[1] + 0.05], 500, {
    color: "red",
    fillColor: "#f03",
    fillOpacity: "0.5"
}).addTo(map);
circle.bindPopup("I am a <em>circle</em>!");

// add a polygon
var polygon = L.polygon([
    [38.27, -85.76],
    [38.30, -85.80],
    [38.32, -85.75],
]).addTo(map);
polygon.bindPopup("I am a <b>polygon</b>");

// add a popup as a layer
var popup = L.popup()
    .setLatLng([38.23, -85.73])
    .setContent("I am a <b>stand alone</b> popup")
    .openOn(map);

// handle a click event by displaying a popup with coords
var popupevent = L.popup();

// listener function which takes an event object
function onMapClick(e) {
    popupevent
        .setLatLng(e.latlng)
        .setContent("You clicked the map at: <br>" + e.latlng.lat.toString() + " , " + e.latlng.lng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
