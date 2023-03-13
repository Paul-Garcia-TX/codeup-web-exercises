



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
    map.setCenter(result);
    map.setZoom(15);
    fetchWeatherData(result[1], result[0]);
    var marker = new mapboxgl.Marker({
        draggable: true,
    })
        .setLngLat(result)
        .addTo(map);
    document.getElementById("map").scrollIntoView();
    fetchWeatherData(result[0], result[1], userinput);
    marker.on('dragend', function() {
        var newCenter = marker.getLngLat();
        map.setCenter(newCenter);
        fetchWeatherData(newCenter.lat, newCenter.lng, userinput);
    });
    $("#search").click(function() {
        userinput = $("#searchbar").val();
        geocode(userinput, mapboxgl.accessToken).then(function(result) {

            map.flyTo({
                center: result,
                zoom: 10,
                speed: 1
            });
            var marker = new mapboxgl.Marker({
                draggable: true,
            })
                .setLngLat(result)
                .addTo(map);
            document.getElementById("map").scrollIntoView();
            fetchWeatherData(result[0], result[1], userinput);
            marker.on('dragend', function() {
                var newCenter = marker.getLngLat();
                map.setCenter(newCenter);
                fetchWeatherData(newCenter.lat, newCenter.lng, userinput);
            });


        });
    });
});





let userinput = "";




function fetchWeatherData(lat, lon, locationName) {
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
        // current weather data
        let html = "";
        html += '<div>';

        html += '<p>Temp: ' + parseInt(data.current.temp) + '&#8457; </p>';
        html += '<p>Conditions: ' + data.current.weather[0].description + ' </p>';
        html += '<p>Humidity: ' + data.current.humidity + '% </p>';
        html += '<p>Wind: ' + parseInt(data.current.wind_speed) + ' mph </p>';
        html += '<p>Gusts: ' + parseInt(data.current.wind_gust) + ' mph </p>';
        html += '</div>'

        document.getElementById("current-city").innerHTML = html;
        // day one forecast

        let dayOne ="";


        dayOne += '<p>Temp: ' + parseInt(data.daily[0].temp.day) + '&#8457; </p>';
        dayOne += '<p>High: ' + parseInt(data.daily[0].temp.max) + '&#8457; </p>';
        dayOne += '<p>Low: ' + parseInt(data.daily[0].temp.morn) + '&#8457; </p>';
        dayOne += '<p>Conditions: ' + data.daily[0].weather[0].description + ' </p>';
        dayOne += '<p>Humidity: ' + data.daily[0].humidity + '% </p>';
        dayOne += '<p>Wind: ' + parseInt(data.daily[0].wind_speed) + ' mph </p>';
        dayOne += '<p>Gusts: ' + parseInt(data.daily[0].wind_gust) + ' mph </p>';
        dayOne += '</div>'

        document.getElementById("cardOne").innerHTML = dayOne;

        // day two of forecast

        let dayTwo ="";

        dayTwo += '<p>Temp: ' + parseInt(data.daily[1].temp.day) + '&#8457; </p>';
        dayTwo += '<p>High: ' + parseInt(data.daily[1].temp.max) + '&#8457; </p>';
        dayTwo += '<p>Low: ' + parseInt(data.daily[1].temp.morn) + '&#8457; </p>';
        dayTwo += '<p>Conditions: ' + data.daily[1].weather[0].description + ' </p>';
        dayTwo += '<p>Humidity: ' + data.daily[1].humidity + '% </p>';
        dayTwo += '<p>Wind: ' + parseInt(data.daily[1].wind_speed) + ' mph </p>';
        dayTwo += '<p>Gusts: ' + parseInt(data.daily[1].wind_gust) + ' mph </p>';
        dayTwo += '</div>'

        document.getElementById("cardTwo").innerHTML = dayTwo;

        let dayThree ="";

        dayThree += '<p>Temp: ' + parseInt(data.daily[2].temp.day) + '&#8457; </p>';
        dayThree += '<p>High: ' + parseInt(data.daily[2].temp.max) + '&#8457; </p>';
        dayThree += '<p>Low: ' + parseInt(data.daily[2].temp.morn) + '&#8457; </p>';
        dayThree += '<p>Conditions: ' + data.daily[2].weather[0].description + ' </p>';
        dayThree += '<p>Humidity: ' + data.daily[2].humidity + '% </p>';
        dayThree += '<p>Wind: ' + parseInt(data.daily[2].wind_speed) + ' mph </p>';
        dayThree += '<p>Gusts: ' + parseInt(data.daily[2].wind_gust) + ' mph </p>';
        dayThree += '</div>'

        document.getElementById("cardThree").innerHTML = dayThree;

        let dayFour ="";

        dayFour += '<p>Temp: ' + parseInt(data.daily[3].temp.day) + '&#8457; </p>';
        dayFour += '<p>High: ' + parseInt(data.daily[3].temp.max) + '&#8457; </p>';
        dayFour += '<p>Low: ' + parseInt(data.daily[3].temp.morn) + '&#8457; </p>';
        dayFour += '<p>Conditions: ' + data.daily[3].weather[0].description + ' </p>';
        dayFour += '<p>Humidity: ' + data.daily[3].humidity + '% </p>';
        dayFour += '<p>Wind: ' + parseInt(data.daily[3].wind_speed) + ' mph </p>';
        dayFour += '<p>Gusts: ' + parseInt(data.daily[3].wind_gust) + ' mph </p>';
        dayFour += '</div>'

        document.getElementById("cardFour").innerHTML = dayFour;

        let dayFive ="";

        dayFive += '<p>Temp: ' + parseInt(data.daily[4].temp.day) + '&#8457; </p>';
        dayFive += '<p>High: ' + parseInt(data.daily[4].temp.max) + '&#8457; </p>';
        dayFive += '<p>Low: ' + parseInt(data.daily[4].temp.morn) + '&#8457; </p>';
        dayFive += '<p>Conditions: ' + data.daily[4].weather[0].description + ' </p>';
        dayFive += '<p>Humidity: ' + data.daily[4].humidity + '% </p>';
        dayFive += '<p>Wind: ' + parseInt(data.daily[4].wind_speed) + ' mph </p>';
        dayFive += '<p>Gusts: ' + parseInt(data.daily[4].wind_gust) + ' mph </p>';
        dayFive += '</div>'

        document.getElementById("cardFive").innerHTML = dayFive;

    });
}
