let weatherRequest = new XMLHttpRequest();
let apiURLstring = 
'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=01882f9d04643164dd726eac6ad8ca70';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById('cc-temp').innerHTML = weatherData.main.temp;

let icon = "https://openweathermap.org/img/w/" +
weatherData.weather[0].icon + ".png";
let desc = weatherData.weather[0].description;

document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);
}
