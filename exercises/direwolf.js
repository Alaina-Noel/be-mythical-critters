class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive', starksToProtect = [], huntsWhiteWalkers = true) {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = starksToProtect;
    this.huntsWhiteWalkers = huntsWhiteWalkers;
  }

  protect(creature) {
    this.huntsWhiteWalkers = false;
    if (creature.location === this.home && this.starksToProtect.length < 2) {
      creature.safe = true;
      this.starksToProtect.push(creature);
    }
  }

  leave(creature) {
    creature.safe = false;
    let removedCreatureIndex = this.starksToProtect.indexOf(creature);
    this.starksToProtect.splice(removedCreatureIndex, 1);
  }
}

module.exports = Direwolf;
