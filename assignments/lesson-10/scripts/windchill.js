var tempF = parseInt(document.getElementById('currentTemp').innerHTML);
var speed = parseInt(document.getElementById('windSpeed').innerHTML);
var chillFactor = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));

chillFactor = Math.round(chillFactor);
document.getElementById("chillFactor").innerHTML = chillFactor;