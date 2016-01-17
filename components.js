require("./style.css");

var React = require('react');
var slides = require('./slides');
// Pulling in components from other files using node syntax
var Header = require('./header');
var Footer = require('./footer');
var {dispatch}  = require('./dispatcher');

var Application = React.createClass({
  getInitialState() {
    return {slideNum: 0};
  },
  render() {
    return (
      <div className="presentation">
        <Header/>
        <Slide slide={slides[this.state.slideNum]} stores={this.props.stores} dispatch={this.props.dispatch} />
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
		var slide = this.props.slide;
    return (
      <div className="slide">
        <h1 className="slide__title">
          {slide.title}
        </h1>
        <div className="slide__content">
          <div className="slide__content__media">
						{!slide.externalData && 
							<figure className="media">
								<img src={slide.img} className="media__image" />
								{slide.attribution &&
									<figcaption className="media__caption" >
										<a className="slide__media__source" href={slide.attribution.url}>
								{slide.attribution.copyright}
										</a>
									</figcaption>
								}
							</figure>
						} 
						{slide.externalData &&
							<ExternalData  stores={this.props.stores} dispatch={this.props.dispatch}/>
						}
          </div>
          <div className="slide__content__bullets">
            <Bullets slideNum={slide.slideNum} bullets={slide.bullets} />
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

var ExternalData = React.createClass({
	componentWillMount() {
		this.props.dispatch('FETCH');
  },
  render() {
		var externalData = this.props.stores.externalData;
	  if (externalData.error) return <div>Error!!!</div>;
		if(externalData.data) {
			return (
				<div>
					{externalData.data.valueSeq().map((value, name) => {
					   return <p key={name}><strong>{name}:</strong>{value}</p>
					})}
				</div>
			);
		}
		return <div></div>;
  }
});

module.exports = {Application, Slide, Bullets, ExternalData};
