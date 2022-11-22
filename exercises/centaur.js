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
    if (this.actionCount >= 3 || this.cranky === true) {
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
    this.actionCount += 1
    if (this.actionCount >= 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!';
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
