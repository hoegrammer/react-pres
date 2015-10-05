var React = require('react');
var slides = require('./slides');

var Presentation = React.createClass({
  getInitialState() {
    return {slideNum: 0};
  },
  render() {
    return (
      <div>
        <Slide {...slides[this.state.slideNum]} />
      </div>
    );
  },
  componentDidMount() {
    window.addEventListener("keydown", this.changeSlide);
  },
  changeSlide(e) {
    if (e.which ==  37 && this.state.slideNum > 0) {
      return this.setState({slideNum: this.state.slideNum - 1});
    }
    if (e.which ==  39 && this.state.slideNum < slides.length - 1) {
      return this.setState({slideNum: this.state.slideNum + 1});
    }
  }
});

var Slide = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img style={{float: 'left'}} src={this.props.img} width={'200px'} />
        <Bullets bullets={this.props.bullets} />
      </div>
    );
  }
})

var SimpleBullets = React.createClass({
  render() {
    return (
      <ul style={{float: 'left'}}>
        {this.props.bullets.map((bullet, i) => (<li key={i}>{bullet}</li>))}
      </ul>
    );
  }
});

var Bullets = React.createClass({
  getInitialState() {
    return {numBullets: 0};
  },
  render() {
    return (
      <ul style={{float: 'left'}}>
        {this.props.bullets.slice(0, this.state.numBullets).map(
          (bullet, i) => (<li key={i}>{bullet}</li>)
        )}
      </ul>
    );
  },
  componentDidMount() {
    window.addEventListener("keydown", this.addBullet);
  },
  addBullet(e) {
    if (e.which == 40) {
      return this.setState({numBullets: this.state.numBullets + 1})
    }
  }
});

React.render(<Presentation {...slides} />, document.getElementById('main'))
