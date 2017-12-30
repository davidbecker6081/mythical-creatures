function iteratorFactory() {

};

iteratorFactory.prototype.sum = function(arr) {
  if (typeof(arr[0]) === 'string') {
    return arr.reduce((string, additive) => {
      string += additive
      return string
    }, '')
  } else {
    return arr.reduce((sum, additive) => {
      sum += additive
      return sum
    }, 0)
  }
};

iteratorFactory.prototype.sumAndSquare = function(arr) {
  const sum = arr.reduce((sum, additive) => {
    sum += additive
    return sum
  }, 0)

  return sum * sum
};

iteratorFactory.prototype.onlyEvens = function(arr) {
  return arr.filter(num => num % 2 === 0)
};

iteratorFactory.prototype.onlyOdds = function(arr) {
  return arr.filter(num => num % 2 !== 0)
};

iteratorFactory.prototype.squareAndSum = function(arr) {
  return arr.map(num => num * num).reduce((sum, num) => {
    sum += num
    return sum
  }, 0)
};

module.exports = iteratorFactory;
