class Werewolf {
  constructor(name, location, human = true, wolf = false) {
    this.name = name;
    this.location = location;
    this.human = human;
    this.wolf = wolf;
  }

  change() {
    if (this.wolf === true) {
    this.wolf = false
    this.human = true
  } else {
    this.human = false
    this.wolf = true
    }
  }
  // stare(person) {
  //   if (this.statues.length < 3) {
  //     person.stoned = true
  //     this.statues.push(person)
  //   } else {
  //     person.stoned = true
  //     this.statues.push(person)
  //     this.statues[0].stoned = false
  //     this.statues.shift()
  //   }
  }

  // says(message) {
  //  return '**;* ' +message+' *;**' ;
  // }


module.exports = Werewolf;

