// import TypeIt from '../node_modules/typeit/dist/typeit.min.js';
const TypeIt = require('typeit');

// https://www.typeitjs.com/docs/vanilla/

new TypeIt('.greet', {
    speed: 50,
  })
  .type('Hello!')
  .go();
