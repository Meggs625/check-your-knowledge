var Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurns(guess) {
    const turn = new Turn(guess, this.currentCard);
    let feedback = turn.giveFeedback(turn.evaluateGuess());
    if (feedback === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id);
      this.turns++;
      this.currentCard = this.deck[this.turns];
      return feedback;
    } else {
      this.turns++;
      this.currentCard = this.deck[this.turns];
      return feedback;
    }  
  }

  calculatePercentCorrect() {
    let total = this.deck.length;
    let incorrect = this.incorrectGuesses.length;
    let amountCorrect = parseInt(((total - incorrect) / total) * 100);
    return `${amountCorrect}%`;
  }
  endRound() {
    let score = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${score} of the questions correctly!`;
  }
}
module.exports = Round;