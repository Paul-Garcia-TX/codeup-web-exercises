$(document).ready(function() {
    $('#my-button').click(function() {
        alert('Hello, world!');
    });
});
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
        });

    });
});


placeMarkersAndPopups(locations, mapboxgl.accessToken, map);

function updateCityName() {
    var center = map.getCenter();
    geocode(center.lng + ',' + center.lat, mapboxgl.accessToken).then(function(result) {
        var city = result.features.find(function(feature) {
            return feature.place_type.includes('place');
        });
        if (city) {
            var cityName = city.text;
            document.getElementById('current-city').innerHTML = 'Current City: ' + cityName;
        }
    });
}

$(document).ready(function() {
    $("#search").click(function() {
        var userinput = $("#searchbar").val();
        geocode(userinput, mapboxgl.accessToken).then(function(result) {
            map.setCenter(result);
            updateCityName();
        });
    });
});

function updateCurrentCityName(cityName) {
    var currentCity = document.getElementById("current-city");
    currentCity.textContent = "Current City: " + cityName;
}

updateCurrentCityName();
updateCityName();