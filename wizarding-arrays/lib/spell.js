function Spell(name, description) {
  this.name = name;
  this.description = description;
  this.executionHistory = [];
};

Spell.prototype.execute = function(target) {
  if (Array.isArray(target)) {
    return target.reduce((newString, targetObj, i) => {
      newString += `Success! The ${targetObj} is levitating.`
      if (i < target.length - 1) {
        newString += ' '
      }
      this.executionHistory.push(targetObj)
      return newString
    }, '')
  } else {
    this.executionHistory.push(target)
    return `Success! The ${target} is levitating.`
  }
};

Spell.prototype.clearExecutionHistory = function() {
  this.executionHistory = [];
};

module.exports = Spell;
