var React = require('react');

var Footer = React.createClass({
  render() {
    return (
      <div>
        <p style={{clear: 'both'}}>Naomi Rosenberg</p>
        <p style={{float: 'right'}}>2015-12-10</p>
      </div>
    );
  }
});

module.exports = Footer;