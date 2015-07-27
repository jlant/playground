var cities = new L.LayerGroup();

L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

var somewhere = new L.LayerGroup();
L.marker([39.79, -105.25]).bindPopup('Somewhere.').addTo(somewhere);

var grayscale = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var streets = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
});

var map = L.map('map', {
	center: [39.73, -104.99],
	zoom: 10,
	layers: [grayscale, cities, somewhere]
});

var baseLayers = {
	"Grayscale": grayscale,
	"Streets": streets
};

var overlays = {
	"Cities": cities,
	"Somewhere": somewhere
};

// create the control
L.control.layers(baseLayers, overlays).addTo(map);
// L.control.layers(overlays).addTo(map);
