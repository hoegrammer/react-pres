var React = require('react');
var chai = require('chai');
var expect = chai.expect;
var skinDeep = require('skin-deep');
var srender = skinDeep.shallowRender;
var {Application, Slide} = require('../components');
global.document = {};

describe('Application component', () => {
	
	var output;

	beforeEach(() => {
		output = srender(() => <Application />);
	});
		
	it('should have a slide', () => {
		expect(output.findNode('Slide')).to.be.ok;
	});

	it('should be set to slide number 0', () => {
		expect(output.getMountedInstance().state.slideNum).to.eql(0);
	});

	describe('changeSlide', () => {

		it('should increment slideNum on up arrow press', () => {
			var keyPress = {which: 39};
			output.getMountedInstance().changeSlide(keyPress);			
			expect(output.getMountedInstance().state.slideNum).to.eql(1);
		});

		it('should decrement slideNum on down arrow press if > 0', () => {
			var instance = output.getMountedInstance();
			instance.state.slideNum = 3;
			var keyPress = {which: 37};
			instance.changeSlide(keyPress);			
			expect(instance.state.slideNum).to.eql(2);
		});

		it('should not decrement slideNum if 0', () => {
			var instance = output.getMountedInstance();
			var keyPress = {which: 37};
			instance.changeSlide(keyPress);			
			expect(instance.state.slideNum).to.eql(0);
		});
  });
});

describe('Slide component', () => {
	
	var output, title = 'Foo', bullets = 'anything';

	beforeEach(() => {
		var slide = {title, bullets};
		output = srender(() => <Slide slide={slide} />);
	});

	it('should display the title', () => {
		expect(output.findNode('h1').props.children).to.eql('Foo');
  });

	it('should render bullets component', () => {
		expect(output.findNode('Bullets')).to.be.ok;
	});

	it('should pass though bullets', () => {
		expect(output.findNode('Bullets').props.bullets).to.eql(bullets);
	});

	context('without external data', () => {

		it('should show the image', () => {
		  var slide = {img: 'bar'};
		  output = srender(() => <Slide slide={slide} />);
			expect(output.findNode('img').props.src).to.eql('bar');
		});
	});

	context('with external data', () => {

		var stores = 'anything', dispatch = 'anything else';

		beforeEach(() => {
			var slide = {externalData: true, img: 'bar'};
		  output = srender(() => <Slide slide={slide} stores={stores} dispatch={dispatch} />);
		});

		it('should not show the image', () => {
			expect(output.findNode('img')).to.be.false;
		});

		it('should render external data component', () => {
			expect(output.findNode('ExternalData')).to.be.ok;
		});

		it('should pass stores and dispatch to external data component', () => {
			expect(output.findNode('ExternalData').props).to.eql({stores, dispatch});
		});
	});
});

