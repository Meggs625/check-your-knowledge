const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  let card;
  let turn;

  this.beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card)});

  it('should be a function', () => {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });
  
  it('should accept a user guess and the current card', () => {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.equal(card);
  });

  it('should provide the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('array');    
  });

  it('should provide the current card information', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the user\'s guess is the correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should evaluate if a different guess is the correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should provide feedback on whether the guess was correct or not', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});