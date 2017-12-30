var assert = require('chai').assert;
var iteratorFactory = require('../lib/iteratorFactory');

describe('IteratorFactory', function() {

  it('can be instantiated with a collection', function() {
    var collection = [1, 2, 3, 4, 5];
    var iteratorFactory = new iteratorFactory(collection);

    assert.equal(iteratorFactory.collection, collection)
  });

  describe('when instantiated with a collection', function() {

    it('the prototype function sum is invoked with the collection', function() {
      var factory = new iteratorFactory([1, 2, 3, 4, 5]);

      assert.equal(factory.sum(), 15);

      assert.equal(factory.sum([1, 2, 3, 4, 5]), 15);
    });

    it('the prototype function `sumAndSquare` is invoked with the collection', function() {
      var factory = new iteratorFactory([1, 2, 3, 4, 5]);

      assert.equal(factory.sumAndSquare(), 225);

      assert.equal(factory.sumAndSquare([1, 2, 3, 4, 5]), 225);
    });

    it('the prototype function `onlyEvens` is invoked with the collection', function() {
      var factory = new iteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.deepEqual(factory.onlyEvens(), [2, 4, 6]);
      assert.deepEqual(factory.onlyEvens([20, 33, 55, 24]), [20, 24]);
    });

    it('the prototype function `onlyOdds` is invoked with the collection', function() {
      var factory = new iteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.deepEqual(factory.onlyOdds(), [1, 3, 5]);
      assert.deepEqual(factory.onlyOdds([20, 33, 55, 24]), [33, 55]);
    });

    it('the prototype function `squareAndSum` is invoked with the collection', function() {
      var factory = new iteratorFactory([1, 2, 3, 4, 5, 6]);

      assert.equal(factory.squareAndSum(), 91);
    });
  });
});
