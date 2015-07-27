var map = L.map('map').setView([39.74739, -105], 13);

// add a tile layer from MapBox
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

// add a tile layer from ESRI World Street Map
// var Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
// });
// Esri_WorldStreetMap.addTo(map);

var baseballIcon = L.icon({
    iconUrl: 'images/baseball-marker.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
    var popupContent = "<p>I started out as a GeoJson " + feature.geometry.type + ", but now I am a Leaflet vector!</p>";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}

L.geoJson([bicycleRental, campus], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJson(freeBus, {
    filter: function (feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

var coorsLayer = L.geoJson(coorsField, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: baseballIcon});
    },

    onEachFeature: onEachFeature
}).addTo(map);
