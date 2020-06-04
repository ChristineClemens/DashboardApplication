//Christine - Establish URL source and API key.
var APIKey = "2015c5f25f689dcf6dedba026011e032";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&units=metric&appid=" + APIKey;

//Christine - Establish an AJAX call to the query source.

//------------------------------------------------------------------------------------------
function acquireData() {
    fetch(queryURL, {
        method: "GET",
}) 
        .then(response => response.json())
        .then(data => fetchData(data))
}
acquireData();

//Christine - Add current location, weather, time, and date information to NavBar.
function fetchData(data) {
    console.log(data);
    document.querySelector(".city").innerHTML = `${data.name} <br> ${data.main.temp} <br> ${moment().format('MMMM Do YYYY, h:mm a')}`;
}