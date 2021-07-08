const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {
  let deck;
  let card1;
  let card2;
  let card3;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should take in a new card deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should return the information for the current card', () => {
    let currentCard = round.returnCurrentCard();
    expect(currentCard).to.deep.equal(round.deck[0]);
  })

  it('should increase the turn count by one when guess is provided', () => {
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  })

  it('should move to the next card after a guess has been made', () => {
    round.takeTurn('pug');
    let secondCard = round.currentCard;

    round.takeTurn('monkey');
    let thirdCard = round.currentCard;

    expect(secondCard).to.deep.equal(round.deck[1]);
    expect(thirdCard).to.deep.equal(round.deck[2]);
  })

  it('should evaluate if the guess is correct or incorrect', () => {
    let guess = round.takeTurn('pug');
    expect(guess).to.equal('incorrect!');
  })

  it('should store any incorrect guesses by their id', () => {
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.incorrectGuesses.length).to.equal(1);
  })

  it('should respond as to whether guess is correct or incorrect', () => {
    let guess1 = round.takeTurn('pug');
    let guess2 = round.takeTurn('gallbladder');
    expect(guess1).to.equal('incorrect!');
    expect(guess2).to.equal('correct!');
  })

  it('should return the percentage of correct guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('monkey');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal('33%');
  })
})