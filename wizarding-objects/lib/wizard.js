function Wizard(name) {
  this.name = name;
  this.pets = [];
  this.petsCount = 0;
  this.wand = {};
};

Wizard.prototype.givePet = function(pet) {
  this.pets.push(pet);
  this.petsCount = this.pets.length;
};

Wizard.prototype.petList = function() {
  const pet1Name = this.pets[0].name;
  const pet1Type = this.pets[0].type;
  const pet2Name = this.pets[1].name;
  const pet2Type = this.pets[1].type;
  return `${pet1Name}, a ${pet1Type}, ${pet2Name}, an ${pet2Type}.`
};

Wizard.prototype.giveWand = function(wand) {
  this.wand = wand;
  this.castSpell = this.wand.cast.bind(this);
};

module.exports = Wizard;
