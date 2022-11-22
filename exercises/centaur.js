class Centaur {
  constructor(name, breed, cranky = false, standing = true, actionCount = 0) {
    this.name = name
    this.breed = breed
    this.cranky = cranky
    this.standing = standing
    this.actionCount = actionCount
  }

  shoot() {
    this.actionCount += 1
    if (this.actionCount >= 3) {
      this.cranky = true
    }
    return 'Twang!!!';
  }

  run() {
    this.actionCount += 1
    if (this.actionCount >= 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!';
  }

}

module.exports = Centaur;
