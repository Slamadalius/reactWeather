var React = require('react');
var {Link} = require('react-router');


var Example = (props) => {
  return (
    <div>
    <h1 className="text-center">Example</h1>
    <p>Here are a few example location to try out:</p>
    <ul>
      <li>
        <Link to='/?location=London'>London, UK</Link>
      </li>
      <li>
        <Link to='/?location=Vilnius'>Vilnius, LT</Link>
      </li>
    </ul>
    </div>
  )
};

module.exports = Example;
