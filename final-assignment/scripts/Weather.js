class Weather extends WeatherData {
  constructor(data) {
    super(data);
    let _degF = '&deg;F';
    this.props = [{
        label: 'Conditions',
        data: this.conditions
      },
      {
        label: 'Temperature',
        data: this.temp + _degF
      },
      {
        label: 'High',
        data: this.high + _degF // Degrees Farenheit
      },
      {
        label: 'Low',
        data: this.low + _degF // Degrees Farenheit
      },
      {
        label: 'Humidity',
        data: this.humidity + '&#37;' // % Percent
      },
      {
        label: 'Clouds',
        data: this.clouds + '&#37;' // % Percent
      },
      {
        label: 'Precipitation',
        data: this.precipitation + '&#34;' // " Inches
      },
      {
        label: 'Wind Speed',
        data: this.windspeed + ' mph' // Miles Per Hour
      },
      {
        label: 'Wind Direction',
        data: this.winddirection + '&deg;' // Degrees
      },
      {
        label: 'Wind Chill',
        data: (this.windchill).toFixed(2) + _degF // Degrees Farenheit
      }
    ];
  }
  summary() {
    let box = document.createElement('div');
    let icon = document.createElement('img');
    let temp = document.createElement('span');
    box.className = 'w-summary';
    icon.src = this.img;
    icon.alt = this.conditions + ' icon';
    temp.innerHTML = this.temp + '&deg;F';
    box.appendChild(icon);
    box.appendChild(temp);
    return box;
  }
  details() {
    let box = document.createElement('div');
    let list = document.createElement('ul');
    box.className = 'w-details';
    for (let i = 0; i < this.props.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = this.props[i].label + ': ' + this.props[i].data;
      list.appendChild(li);
    }
    box.appendChild(list);
    return box;
  }
  listview() {
    let box = document.createElement('div');
    let day = document.createElement('span');
    let icon = document.createElement('img');
    let temp = document.createElement('span');
    box.className = 'w-list';
    day.textContent = this.day;
    icon.src = this.img;
    icon.alt = this.conditions + ' icon';
    temp.innerHTML = this.temp + '&deg;F';
    box.appendChild(day);
    box.appendChild(icon);
    box.appendChild(temp);
    return box;
  }
}