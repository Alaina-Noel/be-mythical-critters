class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = thirsty || true;
  }

  drink() {
    this.thirsty = false;
  }
}

module.exports = Vampire;