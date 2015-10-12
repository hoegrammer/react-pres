require("./style.css");

var React = require('react');
var slides = require('./slides');
// Pulling in components from other files using node syntax
var Header = require('./header');
var Footer = require('./footer');

var Presentation = React.createClass({
  getInitialState() {
    return {slideNum: 0};
  },
  render() {
    return (
      <div className="presentation">
        <Header />
        <Slide {...slides[this.state.slideNum]} />
        <Footer />
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
      <div className="slide">
        <h1 className="slide__title">
          {this.props.title}
        </h1>
        <div className="slide__content">
          <div className="slide__content__media">
            <figure className="media">
              <img src={this.props.img} className="media__image" />
              {this.props.attribution &&
                <figcaption className="media__caption" >
                  <a className="slide__media__source" href={this.props.attribution.url}>
                    {this.props.attribution.copyright}
                  </a>
                </figcaption>
              }
            </figure>
          </div>
          <div className="slide__content__bullets">
            <Bullets slideNum={this.props.slideNum} bullets={this.props.bullets} />
          </div>
        </div>
      </div>
    );
  }
})

var Bullets = React.createClass({
  getInitialState() {
    return {numBullets: 0};
  },
  render() {
    return (
      <ul className="bullet-list">
        {this.props.bullets.slice(0, this.state.numBullets).map(
          (bullet, i) => (
            <li className="bullet-list__item"
              key={i}>{bullet}
            </li>
          )
        )}
      </ul>
    );
  },
  componentDidMount() {
    window.addEventListener("keydown", this.showNextBullet);
  },
  // When a new slide is loaded (slideNum changes), clear bullets.
  componentWillReceiveProps(nextProps) {
    if (nextProps.slideNum !== this.props.slideNum) {
      this.setState({numBullets: 0});
    }
  },
  showNextBullet(e) {
    if (e.which == 40) {
      e.preventDefault();
      // This changes the state, causing render() to run again
      return this.setState({numBullets: this.state.numBullets + 1})
    }
  }
});

// Another component to swap out for "Bullets", to demonstrate compositionality
// Also demonstrates using map to generate HTML
var SimpleBullets = React.createClass({
  render() {
    return (
      <ul className='bullet-list'>
        {this.props.bullets.map((bullet, i) => (
          <li className='bullet-list__item' key={i}>
            {bullet.toUpperCase()}
          </li>))}
      </ul>
    );
  }
});


React.render(<Presentation {...slides} />, document.getElementById('main'))
