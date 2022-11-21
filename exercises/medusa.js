class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, statues=[]) {
    this.name = name;
    this.statues = statues;
  }
  stare(person) {
    if (this.statues.length < 3) {
      person.stoned = true
      this.statues.push(person)
    } else {
      person.stoned = true
      this.statues.push(person)
      this.statues[0].stoned = false
      this.statues.shift()
    }
  }

  // says(message) {
  //  return '**;* ' +message+' *;**' ;
  // }
}



// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;

