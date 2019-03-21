var main = document.getElementById('festival');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townInfo = request.response;


 events = document.getElementById("festival").innerHTML = townInfo.towns[4].events;
}