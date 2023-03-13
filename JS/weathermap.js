
const mapboxToken = "pk.eyJ1IjoicGF1bG5nYXJjaWEiLCJhIjoiY2xmMm9yanIwMGtpNzNyazdkZDY5NWhpdCJ9.S5vaMxkEfllNbXc2OcT1bA";
const openWeather = "190a1dcab33040d6dbf6cbd4eded6702";

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: openWeather,
        q:     "Austin, TX, US",
        units: "imperial",
    } // <-- missing closing curly brace for `data` object
}).done(function(data){
    console.log(data);
});

// mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bG5nYXJjaWEiLCJhIjoiY2xmMm9yanIwMGtpNzNyazdkZDY5NWhpdCJ9.S5vaMxkEfllNbXc2OcT1bA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10

});
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
geocode("Austin, TX", mapboxgl.accessToken).then(function(result) {
    console.log(result);
    map.setCenter(result);

});









let userinput = "";

$(document).ready(function() {
    $("#search").click(function() {
        userinput = $("#searchbar").val();
        geocode(userinput, mapboxgl.accessToken).then(function(result) {
            map.setCenter(result);
            var mapElement = document.getElementById("map");
            mapElement.scrollIntoView({behavior: "smooth"});
        });
    });
});
const canvas = map.getCanvasContainer();

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': result
            }
        }
    ]
};

mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bG5nYXJjaWEiLCJhIjoiY2xmMm9yanIwMGtpNzNyazdkZDY5NWhpdCJ9.S5vaMxkEfllNbXc2OcT1bA';
const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
    .forwardGeocode({
        query: 'Austin, TX',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then((response) => {
        if (
            !response ||
            !response.body ||
            !response.body.features ||
            !response.body.features.length
        ) {
            console.error('Invalid response:');
            console.error(response);
            return;
        }
        const feature = response.body.features[0];

        const map = new mapboxgl.Map({
            container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12',
            center: feature.center,
            zoom: 10
        });

// Create a marker and add it to the map.
        new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
    });