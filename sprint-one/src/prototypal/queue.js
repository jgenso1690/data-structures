var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.count = 0;
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    var counter = this.count;
    this[counter] = value;
    this.count++;
  },
  dequeue: function() {
    var result = this['0'];
    for (var keys in this) {
      if (typeof this[keys] !== 'function') {
        this[keys - 1] = this[keys];
      }
    }
    if (this.count > 0) {
      this.count--;
    }
    return result;
  },
  size: function() {
    return this.count;
  }
};
