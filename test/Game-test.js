const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', function() {
  it('should have a way to track the current round', () => {
    let game = new Game();
    expect(game.currentRound).to.equal();
  })

  it('should create a new group of cards, a new deck, and a new round that becomes the current round', () => {
    let game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})