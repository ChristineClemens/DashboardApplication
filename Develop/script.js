//Christine - Establish URL source and API key.
var APIKey = "2015c5f25f689dcf6dedba026011e032";
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&units=metric&appid=" + APIKey;

//Christine - Use the fetch api function to retrieve data from the openweathermap.org site.
function fetchData(URL) {
    fetch(URL, {
        method: "GET",
}) 
    .then(response => response.json())
    .then(data => displayData(data))
}
fetchData(weatherURL);

//Christine - Add current location, weather, time, and date information to NavBar.
function displayData(data) {
    console.log(data);
    document.querySelector(".navbarInfo").innerHTML = `${data.name} <br> ${data.main.temp} <br> ${moment().format('MMMM Do YYYY, h:mm a')}`;
}

// Christine - Use geolocation api to retrieve location.
function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coordURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
        fetchData(coordURL)
    })
}
getLocation();
