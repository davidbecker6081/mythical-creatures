function Centaur(name, breed = '') {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.shootAndRunCount = 0;
  this.standing = true;
  this.layingDown = false;
};

Centaur.prototype.shoot = function() {
  if (!this.cranky) {
    this.shootAndRunCount++
  }

  this.shootAndRunCount > 2 ? this.cranky = true : false;
  return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
};

Centaur.prototype.run = function() {
  if (!this.cranky) {
    this.shootAndRunCount++
  }

  this.shootAndRunCount > 2 ? this.cranky = true : false;
  return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
};

Centaur.prototype.sleep = function() {
  if (this.layingDown) {
    this.cranky = false;
    this.shootAndRunCount = 0;
  }
  return this.layingDown ? 'ZZZZ' : 'NO!'
};

Centaur.prototype.layDown = function() {
  this.standing = false;
  this.layingDown = true;
};

Centaur.prototype.standUp = function() {
  this.standing = true;
  this.layingDown = false;
};

Centaur.prototype.drinkPotion = function() {
  if (this.standing && this.cranky) {
    this.cranky = false
  } else {
    this.cranky = true;
    return 'Not while I\'m laying down!';
  }
};

module.exports = Centaur;
