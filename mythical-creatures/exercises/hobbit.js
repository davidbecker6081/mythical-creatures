function Hobbit(name) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.adult = false;
  this.isShort = true;
  this.old = false;
  this.hasRing = this.name === 'Frodo';
};

Hobbit.prototype.celebrateBirthday = function() {
  this.age++
  this.adult = this.age > 32;
  this.old = this.age > 100;
};

module.exports = Hobbit;
