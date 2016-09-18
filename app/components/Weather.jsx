var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      humidity: undefined,
      description: undefined,
      clouds: undefined,
      icon: undefined
    });

    openWeatherMap.getTemp(location).then(function (weather) {
      that.setState({
        location: location,
        temp: weather.temp,
        humidity: weather.humidity,
        description: weather.description,
        clouds: weather.clouds,
        icon: weather.icon,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        location: null,
        temp: null,
        errorMessage: e.message
      });
    })
  },
  render: function () {
    var{isLoading, temp, humidity, description, icon, clouds, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} humidity={humidity} description={description} icon={icon} clouds={clouds}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    )
  }
});

module.exports = Weather;
