const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card)
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
  
  it('should accept a user guess and the current card', () => {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.equal(card);
  });

  it('should provide the user\'s guess', () => {
    const guess = turn.returnGuess();
    expect(guess).to.equal('array');    
  });

  it('should provide the current card information', () => {
    const currentCard = turn.returnCard();
    expect(currentCard).to.equal(card);
  });

  it('should evaluate if the user\'s guess is the correct answer', () => {
    const isCorrect = turn.evaluateGuess();
    expect(isCorrect).to.equal(false);
  });

  it('should evaluate if a different guess is the correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)
    const isCorrect = turn.evaluateGuess();
    expect(isCorrect).to.equal(true);
  });

  it('should provide feedback on whether the guess was correct or not', () => {
    const feedback = turn.giveFeedback();
    expect(feedback).to.equal('incorrect!');
  });

});