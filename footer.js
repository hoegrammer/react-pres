var React = require('react');

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <span className="footer__date">
          {new Date().toDateString()} 
        </span>
      </div>
    );
  }
});

module.exports = Footer;
