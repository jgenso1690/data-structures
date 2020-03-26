var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  count: 0,
  push: function(value){  // a
    var counter = this.count; // counter = 0
    this[counter] = value;    // 0 : a
    this.count++;   // count : 1
  },
  pop: function(){
    var counter = this.count - 1;
    if (this.count > 0){
      this.count--;
    }

    return this[counter];

  },
  size: function(){
    return this.count;
  }
};


