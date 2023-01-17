function Hobbit(name, disposition = 'homebody') {
  return {
    name,
    disposition,
    age: 0,
    adult: false,
    isShort: true,
    old: false,
    hasRing: name === "Frodo",

    celebrateBirthday() {
      this.age++;
      if (this.age > 32) {
        this.adult = true;
      }
      if (this.age > 100) {
        this.old = true;
      }
    }
  }
}

module.exports = Hobbit