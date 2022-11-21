class Werewolf {
  constructor(name, location, human = true, wolf = false, hungry = false) {
    this.name = name;
    this.location = location;
    this.human = human;
    this.wolf = wolf;
    this.hungry = false;
  }

  change() {
    if (this.wolf === true) {
    this.wolf = false
    this.human = true
  } else {
    this.human = false
    this.wolf = true
    this.hungry = true
    }
  }
  eat(victim) {
    if (this.hungry === true) {
      victim.alive = false
      return 'YUM!'
    } else {
      return 'I cannot eat because I am not hungry.'
    }
  }
}

  // says(message) {
  //  return '**;* ' +message+' *;**' ;
  // }


module.exports = Werewolf;

