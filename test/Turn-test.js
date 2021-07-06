const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  
  it('should accept a user guess and the current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.guess).to.equal('array');
    expect(turn.card).to.equal(card);
  });


})