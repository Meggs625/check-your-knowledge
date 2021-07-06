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

  it('should take in a new card deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should return the information for the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(round.deck[0]);
  })

  it('should increase the turn count by one when guess is provided', () => {
    round.takeTurns('pug');
    expect(round.turns).to.equal(1);
  })

  it('should move to the next card after a guess has been made', () => {
    round.takeTurns('pug');
    let secondCard = round.currentCard;

    round.takeTurns('monkey');
    let thirdCard = round.currentCard;

    expect(secondCard).to.deep.equal(round.deck[1]);
    expect(thirdCard).to.deep.equal(round.deck[2]);
  })

  it('should evaluate if the guess is correct or incorrect', () => {
    expect(round.takeTurns('pug')).to.equal('incorrect!');
  })

  it('should store any incorrect guesses by their id', () => {
    round.takeTurns('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.incorrectGuesses.length).to.equal(1);
  })

  it('should respond as to whether guess is correct or incorrect', () => {
    expect(round.takeTurns('pug')).to.equal('incorrect!');
    expect(round.takeTurns('gallbladder')).to.equal('correct!');
  })

  it('should return the percentage of correct guesses', () => {
    round.takeTurns('pug');
    round.takeTurns('monkey');
    round.takeTurns('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal('33%');
  })
  it('should print the results when a round has been completed', () => {
    round.takeTurns('pug');
    round.takeTurns('monkey');
    round.takeTurns('Fitzgerald');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})