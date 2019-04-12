class WeatherData {
  constructor(data) {
    this.location = data.name;
    this.timestamp = Weather.uts2Date(data.dt);
    this.day = Weather.getDayOfWeek(this.timestamp);
    this.conditions = data.weather[0].main;
    this.temp = data.main.temp;
    this.high = data.main.temp_max;
    this.low = data.main.temp_min;
    this.humidity = data.main.humidity;
    this.clouds = data.clouds['all'];
    this.precipitation = Weather.hasPrecipitation(data);
    this.windspeed = data.wind.speed ? data.wind.speed : 0;
    this.winddirection = data.wind.deg ? data.wind.deg : 0;
    this.windchill = Weather.windchill(this.temp, this.windspeed);
    this.icon = data.weather[0].icon;
    this.img = this.iconURL(this.icon);
  }

  // Temp in Farenheit || WindSpeed in MPH
  static windchill(tf, ws) {
    return 35.74 + 0.6215 * tf - 35.75 * ws ** 0.16 + 0.475 * tf * ws ** 0.16;
  }

  // Convert Unix TimeStamp to Date
  static uts2Date(uts) {
    return new Date(uts * 1000);
  }

  // Calculate Precipitation in Inches
  static hasPrecipitation(data) {
    let p = 0;
    if (data.rain) {
      if (data.rain['3h']) {
        p += data.rain['3h'];
      } else if (data.rain['1h']) {
        p += data.rain['1h'];
      }
      if (data.snow) {
        if (data.snow['3h']) {
          p += data.snow['3h'];
        } else if (data.snow['1h']) {
          p += data.snow['1h'];
        }
      }
    }
    return (p / 25.4).toFixed(2);
  }

  static getDayOfWeek(date) {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wenesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    return days[date.getDay()];
  }

  // Create Icon src
  iconURL(icon) {
    let path = 'icons/';
    let url = path + icon + '.png';
    return url;
  }
}