var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a8067ff652cc48fe659d470ce595c7f9&units=metric';


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          clouds: res.data.clouds.all,
          icon: res.data.weather[0].icon
        };
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
