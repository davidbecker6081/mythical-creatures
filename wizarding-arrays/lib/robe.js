function Robe() {
  this.pockets = [[], [], [], [], [], [], [], [], [], []];
};

Robe.prototype.addToPocket = function(thing) {
  for (let i = 0; i < this.pockets.length; i++) {
    if (this.pockets[i].length === 0) {
      this.pockets[i].push(thing)
      break;
    }
  }
};

Robe.prototype.retrieve = function(thingToRetrieve) {
  let retrievedItem = '';
  this.pockets.map((object, i) => {
    if (object[0] === thingToRetrieve) {
      retrievedItem = object[0]
      this.pockets[i] = []
    }
  })
  return retrievedItem
};

Robe.prototype.emptyAllPockets = function() {
  for (let i = 0; i < this.pockets.length; i++) {
    this.pockets[i] = [];
  }
};

module.exports = Robe;
