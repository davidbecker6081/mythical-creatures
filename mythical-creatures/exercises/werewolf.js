function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
};

Werewolf.prototype.change = function() {
  this.human = !this.human;
  this.wolf = !this.wolf;
  this.hungry = this.wolf;
};

Werewolf.prototype.eat = function(victim) {
  victim.alive = !this.hungry;
  !victim.alive ? this.change() : false;
}

function Victim(name) {
  this.name = name;
  this.alive = true;
};

module.exports = { Werewolf, Victim };
