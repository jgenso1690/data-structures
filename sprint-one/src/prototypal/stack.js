var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.count = 0;
  return storage;
};

var stackMethods = {
  push: function(value) {
    var counter = this.count;
    this[counter] = value;
    this.count++;
  },
  pop: function() {
    var counter = this.count - 1;
    if (this.count > 0) {
      this.count--;
    }
    return this[counter];
  },
  size: function() {
    return this.count;
  }
};


