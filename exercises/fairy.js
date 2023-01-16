class Fairy {
  constructor(name, dust = 10, clothes = {dresses: ['Iris']}, disposition = 'Good natured', humanWards = []) {
    this.name = name;
    this.dust = dust;
    this.clothes = clothes;
    this.disposition = disposition;
    this.humanWards = humanWards
  }

  receiveBelief() {
    this.dust ++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    flowers.forEach(flower => 
      this.clothes.dresses.push(flower));
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      if (this.humanWards.length === 3) {
        this.disposition = 'Good natured'
      }
    }
  }
  
}

module.exports = Fairy;