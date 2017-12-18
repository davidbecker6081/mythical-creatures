function Dragon(name, rider, color) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.eatCount = 0;
  this.hungry = this.eatCount != 3;
};

Dragon.prototype.eat = function() {
  this.eatCount += 1;
  this.hungry = this.eatCount != 3;
};

module.exports = Dragon;
