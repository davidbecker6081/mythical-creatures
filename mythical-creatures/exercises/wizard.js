function Wizard(wizard) {
  this.name = wizard.name;
  this.bearded = wizard.bearded === false ? wizard.bearded : true;
  this.isRested = true;
  this.castCount = 0;
};

Wizard.prototype.incantation = function(spell) {
  return spell.toUpperCase();
};

Wizard.prototype.cast = function() {
  this.castCount ++
  if (this.castCount < 3) {
    return 'MAGIC BULLET';
  } else {
    this.isRested = false;
    return 'I SHALL NOT CAST!';
  }
};

module.exports = Wizard;
