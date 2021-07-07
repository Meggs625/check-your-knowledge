const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should have a way to track the current round', () => {
    expect(game).to.have.property('currentRound');
  });

  it('should create a new array of 10 cards', () => {
    game.start();
    expect(game.createCards()).to.be.an('array');
    expect(game.createCards().length).to.equal(10);
  })

  it('should create a deck of cards', () => {
    game.start();
    expect(game.createDeck()).to.be.instanceOf(Deck);
  })

  it('should create a new current round with the new deck', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })
})