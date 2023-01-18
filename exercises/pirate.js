function Pirate(name, job = 'Scallywag') {
  return {
    name,
    job,
    cursed: false,
    actCounter: 0,
    booty: 0,

    commitHeinousAct() {
      this.actCounter++;
      if (this.actCounter >= 3) {
        this.cursed = true;
      }
    },

    robShip() {
      this.booty += 100;
      return 'YAARRR!';
    }
  }

}

module.exports = Pirate;