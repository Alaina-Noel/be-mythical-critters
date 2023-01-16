class Human {
  constructor(name, encounterCounter = 0, knockedOut = false) {
    this.name = name;
    this.encounterCounter = encounterCounter;
    this.knockedOut = knockedOut;
  }

  noticesOgre() {
    if (this.encounterCounter === 0) {
      return false;
    } else {
      return this.encounterCounter % 3 === 0;
    }
  }
}

module.exports = Human;