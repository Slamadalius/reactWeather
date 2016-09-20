var React = require('react');

var About = (props) => {
    return (
        <div className="about">
            <h1 className="text-center page-title">About</h1>
            <p>
                This is weather application build on React. I have build this for The Complete React Web App Developer Course.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                    - Javascript Framework
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a>
                    - Used To Get Data From
                </li>
            </ul>
        </div>

    )
};

module.exports = About;
