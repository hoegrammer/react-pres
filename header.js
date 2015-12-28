var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div>
          <h1 className="header__title">
            Forefront of front end: react.js
          </h1>
          <span className="header__author">
            Naomi Rosenberg
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Header;
