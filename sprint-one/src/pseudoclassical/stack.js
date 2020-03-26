var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Stack.prototype.push = function(value) {
  var counter = this.count;
  this[counter] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0){
    this.count--;
  }
  var lastElement = this.count;
  return this[lastElement];
};

Stack.prototype.size = function() {
  return this.count;
};
