
var weatherForecast = new XMLHttpRequest()
weatherForecast.open(
  'GET',
  'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=05114d9b05fc90300235d8704185c770&units=imperial',
  true
)
weatherForecast.send()
weatherForecast.onload = function() {
  var weatherData = JSON.parse(weatherForecast.responseText)
  console.log(weatherData)


  var listDate = []
  var listTemp = []
  var listIconCode = []
  var weatherDesc = []

  for (i = 0; i < weatherData.list.length; ++i) {
    time = weatherData.list[i].dt_txt
    if (time.includes('18:00:00')) {
      //date
      var date = new Date(weatherData.list[i].dt * 1000)
      var month = ['January', 'February', 'March',  'April','May',  'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
      var weekDay = [ 'Sunday',    'Monday',  'Tuesday',  'Wednseday',  'Thursday',  'Friday',  'Saturday'  ]
      var findDate =
        weekDay[date.getDay()] +
        '<br>' +
        month[date.getMonth()] +  ' ' +  date.getDate()
      listDate.push(findDate)

      // Temp
      var temp = weatherData.list[i].main.temp
      var temp = Math.round(temp)
      listTemp.push(temp)

      // Icon
      let iconData =
        'https://openweathermap.org/img/w/' +
        weatherData.list[i].weather['0'].icon +
        '.png'
      listIconCode.push(iconData)

      let weatherDescAlt = weatherData.list[i].weather['0'].description
      weatherDesc.push(weatherDescAlt)
    }
    continue
  }

//calls
  document.getElementById('day1').innerHTML = listDate[0]
  document.getElementById('day2').innerHTML = listDate[1]
  document.getElementById('day3').innerHTML = listDate[2]
  document.getElementById('day4').innerHTML = listDate[3]
  document.getElementById('day5').innerHTML = listDate[4]
  document.getElementById('icon1').src = listIconCode[0]
  document.getElementById('icon2').src = listIconCode[1]
  document.getElementById('icon3').src = listIconCode[2]
  document.getElementById('icon4').src = listIconCode[3]
  document.getElementById('icon5').src = listIconCode[4]
  document.getElementById('icon1').alt = weatherDesc[0]
  document.getElementById('icon2').alt = weatherDesc[1]
  document.getElementById('icon3').alt = weatherDesc[2]
  document.getElementById('icon4').alt = weatherDesc[3]
  document.getElementById('icon5').alt = weatherDesc[4]
  document.getElementById('temp1').innerHTML = listTemp[0]
  document.getElementById('temp2').innerHTML = listTemp[1]
  document.getElementById('temp3').innerHTML = listTemp[2]
  document.getElementById('temp4').innerHTML = listTemp[3]
  document.getElementById('temp5').innerHTML = listTemp[4]
  //
}