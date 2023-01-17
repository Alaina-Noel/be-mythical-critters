class Sphinx {
  constructor(name, riddles =[], heroesEaten = 0) {
  this.name = name;
  this.riddles = riddles;
  this.heroesEaten = heroesEaten;
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(attemptedAnswer) {
    let startRiddleCount = this.riddles.length;
    for (let i = 0; i< this.riddles.length; i++)
    if (attemptedAnswer === this.riddles[i].answer) {
      this.riddles.splice(i, 1);
    }
    let endRiddleCount = this.riddles.length
    if (startRiddleCount != endRiddleCount && endRiddleCount != 0) {
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
    } else if (startRiddleCount === endRiddleCount) {
      this.heroesEaten++;
    } else if (endRiddleCount === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${attemptedAnswer}\"???`
    }
  }
  
  
}

module.exports = Sphinx;