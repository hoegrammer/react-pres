module.exports = [{
  slideNum: 0,
  title: 'Hello',
  img: './resources/start.jpg',
  bullets: [
    'This is a simple React app; I\'ll be showing you some of the code as we go along',
    'Grab the source from github - hoegrammer/react-pres',
  ]
},{
  slideNum: 1,
  title: 'What is React?',
  img: './resources/react.png',
  bullets: [
    'A component-based web UI library',
    '"Just" a view layer',
    'Doesn\'t have models like Backbone, for example'
  ]
},{
  slideNum: 2,
  title: 'Advantages for the End User',
  img: './resources/mallard.jpg',
  attribution: {
    url: 'http://blog.nrm.org.uk/2013/07/01/how-mallard-inspired-a-nation/',
    copyright: 'National Railway Museum'
  },
  bullets: [
    'Speed. Because ...',
    'The virtual DOM',
    'Server-side rendering'
  ]
},{
  slideNum: 3,  title: 'Advantages for the Developer',
  img: './resources/lego.jpg',
  bullets: [
    'Composability',
    'Simplicity',
    'Transparency'
  ]
},{
  slideNum: 4,
  title: 'Tooling',
  img: './resources/code.jpg',
  bullets: [
    'Hot-reloading',
    'Node',
		'Webpack',
		'React dev tool support',
		'ES6/Babel'
  ]
},{
		slideNum: 5,
		title: 'What\s all that HTML, what about Separation of Concerns?',
		img: './resources/chaos.jpg',
		attribution: {
			url: 'http://amethyst-fang.deviantart.com/art/Amethyst-Fang-s-Cutie-Mark-278732272',
			copyright: 'Amethyst Fang'
		},
		bullets: [
			'Going back on yourself is fine if you went the wrong way to start with',
			'Separation of concerns doesn\'t mean putting them in different files',
			'JS always linked to HTML - transparency',
			'Flux architecture separates data',
		]
	},{
		slideNum: 6,
		title: 'Learning from Functional Programming',
		img: './resources/erlang.jpeg',
		attribution: {
			url: 'http://version2beta.com/static/slides/idiomatic_erlang/idiomatic_erlang.003.jpeg',
			copyright: 'Rob Martin'
		},
		bullets: [
			'Using Immutable.js for data stores',
			'User input handled by browser; event handlers can be pure functions',
			'Data access encapsulated in interceptors',
			'Map example',
			'0.14 - Functional Components',
			'Bodil Stokke: What Every Hipster Should Know About Functional Programming'
		]
	},{
		slideNum: 7,
		title: 'Flux implementations',
		img: './resources/flux.png',
		bullets: [
		  'Flux is not a library but an architectural pattern',
			'Naive implementations use mutable stores',
			'Fluctuations.js - has interceptors, actions are pure',
			'Redux - mature - useful conventions baked in'
		]
	},{
		slideNum: 8,
		title: 'Unit testing',
		img: './resources/tdd.png',
		bullets: [
			'Mocha',
			'Chai',
			'Skin-deep',
			'Babel'
		]
  },{
		slideNum: 9,
		externalData: true,
		title: 'Data fetching example',
		bullets: [
			'Uses an interceptor to fire async request and then write to store in callback'
  ]
}];
