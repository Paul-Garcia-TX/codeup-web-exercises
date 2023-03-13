



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
geocode("2090 Airport Rd, New Braunfels, TX", mapboxgl.accessToken).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(15);
});






let userinput = "";

$(document).ready(function() {
    $("#search").click(function() {
        userinput = $("#searchbar").val();
        geocode(userinput, mapboxgl.accessToken).then(function(result) {

            map.flyTo({center:result,
                zoom: 10,
                speed: 1
            });
            var marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map);
            document.getElementById("map").scrollIntoView();

        });

    });
});

const center =map.getCenter().toArray();

$.ajax({
    url: "https://api.openweathermap.org/data/3.0/onecall",
    type: "GET",
    data: {
        APPID: openWeather,
        lat: center[1],
        lon: center[0],
        units: "imperial",
    }
}).done(function(data) {
    console.log(data);
});
map.on('moveend', function() {
    var center = map.getCenter();
    fetchWeatherData(center.lat, center.lng);
});

function fetchWeatherData(lat, lon) {
    $.ajax({
        url: "https://api.openweathermap.org/data/3.0/onecall",
        type: "GET",
        data: {
            APPID: openWeather,
            lat: lat,
            lon: lon,
            units: "imperial",
        }
    }).done(function(data) {
        console.log(data);
    });
}
