const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1;
  let card2;
  let card3;
  let deck; 

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  })

  it('should accept a new card array', () => {
    const deck = new Deck([card1, card2])
    expect(deck.cards.length).to.equal(2);  
  })

  it('should accept more cards', () => {
    expect(deck.cards.length).to.equal(3);  
  })
  
  it('should return the total card count in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  })
    
})