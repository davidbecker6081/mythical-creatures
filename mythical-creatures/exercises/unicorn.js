function Unicorn(name, color = 'white') {
  this.name = name;
  this.color = color;
};

Unicorn.prototype.isWhite = () => this.color === 'white';
Unicorn.prototype.says = (string) => `**;* ${string} *;**`;

module.exports = Unicorn;
