$(document).ready(function() {
    $('#my-button').click(function() {
        alert('Hello, world!');
    });
});
const mapboxToken = "pk.eyJ1IjoicGF1bG5nYXJjaWEiLCJhIjoiY2xmMm9yanIwMGtpNzNyazdkZDY5NWhpdCJ9.S5vaMxkEfllNbXc2OcT1bA";
const openWeather = "190a1dcab33040d6dbf6cbd4eded6702";

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeather,
    q:     "San Antonio, US"
});
