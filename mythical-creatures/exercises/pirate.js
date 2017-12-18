function Pirate(name, job = 'Scallywag') {
  this.name = name;
  this.job = job;
  this.cursed = false;
  this.heinousActCount = 0;
  this.booty = 0;
};

Pirate.prototype.commitHeinousAct = function() {
  this.heinousActCount++;
  this.cursed = this.heinousActCount > 2;
};

Pirate.prototype.robShip = function() {
  this.booty += 100;
  return 'YAARRR!';
}

module.exports = Pirate;
