var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
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

        openWeatherMap.getWeather(location).then(function(weather) {
            that.setState({
                location: location,
                temp: weather.temp,
                humidity: weather.humidity,
                description: weather.description,
                clouds: weather.clouds,
                icon: weather.icon,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                // location: null,
                // temp: null,
                // humidity: null,
                // description: null,
                // clouds: null,
                // icon: null,
                errorMessage: e.message
            });
        })
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {
            isLoading,
            temp,
            humidity,
            description,
            icon,
            clouds,
            location,
            errorMessage
        } = this.state;

        function renderMessage() {
            if (isLoading) {
                debugger;
                return <h3>Fetching weather...</h3>
            } else if (location) {
                return <WeatherMessage temp={temp} location={location} humidity={humidity} description={description} icon={icon} clouds={clouds}/>;
            }
        }
        function renderError() {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal message={errorMessage}/>)
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
                {renderError()}
            </div>

        )
    }
});

module.exports = Weather;
