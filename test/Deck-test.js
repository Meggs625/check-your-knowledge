const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  })
  
  it('should accept a new card array', () => {
    const deck = new Deck([card1, card2])
    expect(deck.cards.length).to.equal(2);  
  })
  it('should accept more cards', () => {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards.length).to.equal(3);  
  })
  it('should return the total card count in the deck', () => {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })
    
})