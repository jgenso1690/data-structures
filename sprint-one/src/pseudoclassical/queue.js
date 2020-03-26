var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  var counter = this.count;
  this[counter] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var firstElement = this[0];
  for (var i = 0; i < this.count; i++) {
    this[i] = this[i + 1];
  }
  if (this.count > 0) {
    this.count--;
  }
  return firstElement;
};

Queue.prototype.size = function() {
  return this.count;
};