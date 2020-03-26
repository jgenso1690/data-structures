var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  count: 0,
  enqueue: function(value){
    var count = this.count; // We needed a counter variable to point towards the _value_ contained by this.count, not to point at this.count itself
    this[count] = value; // This line will assign the value to the _number_ that this.count currently contains
    this.count++;
  },
  dequeue: function(){
    var count = this.count;
    var result = this['0'];
    for (var i = 1; i < count; i++){
      this[i - 1] = this[i];
    }
    if (count > 0){
      this.count--;
    }
    return result;
  },
  size: function() {
    return this.count;
  }
};
