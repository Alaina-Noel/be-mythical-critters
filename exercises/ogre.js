class Ogre {
  constructor(name, home = 'Swamp',swings = 0) {
    this.name = name;
    this.home = home;
    this.swings = swings;
  }

  encounter(other) {
    other.encounterCounter++;
    if (other.noticesOgre()) {
      this.swingAt(other);
    }
  }

  swingAt(other) {
      this.swings++;
    if (this.swings % 2 === 0 && this.swings > 0) {
      other.knockedOut = true;
    }
  }

  apologize(other) {
    other.knockedOut = false;
  }

}

module.exports = Ogre;