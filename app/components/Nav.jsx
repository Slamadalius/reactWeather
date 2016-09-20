var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();

        var location = this.refs.searchBar.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.searchBar.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }

    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="menu">
                        <div className="menu-text cursor-default app-name">
                            RWeather
                        </div>
                        <div>
                            <IndexLink to="/" className="eachLink" activeClassName="active" activeStyle={{
                                fontWeight: 'bold',
                                color: '#034881'
                            }}>Get Weather</IndexLink>
                        </div>
                        <div>
                            <Link to="/about" className="eachLink" activeClassName="active" activeStyle={{
                                fontWeight: 'bold',
                                color: '#034881'
                            }}>About</Link>
                        </div>
                        <div>
                            <Link to="/example" className="eachLink" activeClassName="active" activeStyle={{
                                fontWeight: 'bold',
                                color: '#034881'
                            }}>Examples</Link>
                        </div>

                    </div>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="searchBar" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
