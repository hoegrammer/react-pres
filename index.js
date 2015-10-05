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
        {this.state.slideNum > 0 &&
          <button onClick={this.prev}>Previous</button>
        }
        {this.state.slideNum < slides.length - 1 &&
          <button onClick={this.next}>Next</button>
        }
      </div>
    );
  },
  next() {
    this.setState({slideNum: this.state.slideNum + 1});
  },
  prev() {
    this.setState({slideNum: this.state.slideNum - 1});
  }
});

var Slide = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.img} />
        <ul>
          {this.points()}
        </ul>
      </div>
    );
  },
  points() {
    return (this.props.points.map((point, i) => (<li key={i}>{point}</li>)));
  }
})

React.render(<Presentation {...slides} />, document.getElementById('main'))
