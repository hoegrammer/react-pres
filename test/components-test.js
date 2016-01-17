var React = require('react');
var chai = require('chai');
var expect = chai.expect;
var skinDeep = require('skin-deep');
var srender = skinDeep.shallowRender;
var {Application} = require('../components');

describe('Application component', () => {
	
	var output;

	context('on first render', () => {
		
		output = srender(() => {return (<Application />)});

		it('should have a slide', () => {
			expect(output.findNode('Slide')).to.be.ok;
	  });
  });
});

