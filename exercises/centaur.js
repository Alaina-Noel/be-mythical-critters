class Centaur {
  constructor(name, breed, cranky = false, standing = true, actionCount = 0, layingDown = false) {
    this.name = name
    this.breed = breed
    this.cranky = cranky
    this.standing = standing
    this.actionCount = actionCount
    this.layingDown = layingDown
  }

  shoot() {
    if (this.actionCount >= 3 || this.cranky === true || this.layingDown === true) {
    this.cranky = true
    return 'NO!'
  } else { 
    this.actionCount += 1
    if (this.actionCount >= 3) {
      this.cranky = true
    }
    return 'Twang!!!'
  }
}

  run() {
    if (this.actionCount < 3 && this.layDown === false) {
      this.cranky = true
      this.actionCount += 1
      return 'Clop clop clop clop!!!';
    } else if (this.actionCount >= 3 || this.layDown === true) {
      this.cranky = true
    }
    return "NO!"
  }

  sleep() {
    if (this.standing)
    return "NO!"
  }

  standUp () {
    this.standing = true
    this.layingDown = false
  }

  layDown () {
    this.standing = false
    this.layingDown = true
  }

}

module.exports = Centaur;
