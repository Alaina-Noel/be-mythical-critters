class Dragon {
  constructor(name, rider, color, hungry) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = hungry || true;
    this.foodCounter = 0;
  }

  eat() {
    this.foodCounter++;
    if (this.foodCounter >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;