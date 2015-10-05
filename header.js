var React = require('react');

var Header = React.createClass({
  render() {
    return (
      <div>
        <img src={'./resources/skybet.jpg'} height={'100px'} />
        <h1 style={{display: 'inline'}}>Tech talk</h1>
      </div>
    );
  }
});

module.exports = Header;