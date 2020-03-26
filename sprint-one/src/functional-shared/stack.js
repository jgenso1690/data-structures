var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  count: 0,
  push: function(value){
    // this[count] = value;
    // this.count++;
  },
  pop: function(){
    // var result = this.count;
    // if (this.count > 0) {
    //   this.count--;
    // }
    // return result;
  },
  size: function(){
    // return this.count;
  }
};


