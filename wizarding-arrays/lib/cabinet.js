function Cabinet() {
  this.potions = [];
};

Cabinet.prototype.isEmpty = function() {
  return !this.potions.length
};

Cabinet.prototype.add = function(potion) {
  if (Array.isArray(potion)) {
    for (let i = 0; i < potion.length; i++) {
      this.potions.push(potion[i])
    }
  } else {
    this.potions.push(potion)
  }
};

Cabinet.prototype.takeFirstPotion = function() {
  return this.potions.shift()
};

Cabinet.prototype.takePotionWithName = function(potionName) {
  const foundPotion = this.potions.filter(potion => potion.name === potionName)[0];

  for (let i = 0; i < this.potions.length; i++) {
    if (this.potions[i].name === potionName) {
      this.potions.splice(i, 1)
      break;
    }
  }
  
  return foundPotion;
};

Cabinet.prototype.count = function(potionName) {
  return this.potions.filter(potion => potion.name === potionName).length;
}

module.exports = Cabinet;
