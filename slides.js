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
  title: 'Talk is cheap, show me the code',
  img: './resources/code.jpg',
  bullets: [
    'Example of hot-reloading',
    'The infrastructure - node.js, webpack, ES6 (babel)',
    'Example of composability',
    'Example of transparency/simplicity',
  ]
},{
  slideNum: 6,
  title: 'What\s all that HTML, what about Separation of Concerns?',
  img: './resources/chaos.jpg',
  attribution: {
    url: 'http://amethyst-fang.deviantart.com/art/Amethyst-Fang-s-Cutie-Mark-278732272',
    copyright: 'Amethyst Fang'
  },
  bullets: [
    'Going back on yourself is fine if you went the wrong way to start with',
    'Separation of concerns doesn\'t mean putting them in different files (Dave Baker)',
    'JS always linked to HTML - transparency',
    'Flux architecture separates data',
    'Can use Immutable.js, helps you keep track of it'
  ]
}];
