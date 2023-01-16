class Stark {
  constructor(name, location = 'Winterfell', safe = false) {
    this.name = name;
    this.location = location;
    this.safe = safe;
  }

  houseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

}

module.exports = Stark;
