function Bag() {
  this.count = 0;
  this.candies = [];
  this.empty = true;
};

Bag.prototype.push = function(candy) {
  this.candies.push(candy);
  this.count++;
  this.empty = this.candies.length === 0;
}

Bag.prototype.contains = function(candyName) {
  return this.candies.filter(candy => candy.type === candyName).length;
};

module.exports = Bag;
