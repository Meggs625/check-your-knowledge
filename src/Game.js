const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let cards = this.createCards();
    let deck = this.createDeck(cards);
    this.currentRound = new Round(deck);
    this.printMessage();
    this.printQuestion();
  }

  createCards() {
    let roundCards = [];
    for (let i = 0; i < 6; i++) {
      roundCards.push(prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]);
    }
    roundCards.forEach(card => {
      new Card(card.id, card.question, card.answers, card.correctAnswer);
    })
    return roundCards;
  }

  createDeck(cards) {
    let deck = new Deck(cards);
    return deck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;