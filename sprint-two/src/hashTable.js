

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) { // O(1)-ish
  var index = getIndexBelowMaxForKey(key, this._limit);
  var storage = this._storage;
  //check the hash table at the provided index
  var currentBucket = storage.get(index);
  //if the value at the index is undefined assign an empty array
  if (currentBucket === undefined) {
    storage.set(index, []);
    currentBucket = storage.get(index);
  }
  //otherwise iterate over each index of the bucket array
  var foundKey = false;
  for (var i = 0; i < currentBucket.length; i++) {
  //if the index[0] of the tupel is the same as the provided key
    var currentTuple = currentBucket[i];
    if (currentTuple[0] === key) {
    //set our new value to index[1] of the tupel
      currentTuple[1] = value;
      foundKey = true;
    }
  }
  if (!foundKey) {
    currentBucket.push([key, value]);
  }
  //push a tupel of the [key, value] into the bucket at the index
};

HashTable.prototype.retrieve = function(key) { // O(1) (mostly)
  var storage = this._storage;
  var index = getIndexBelowMaxForKey(key, this._limit);
  var currentBucket = storage.get(index);
  for ( var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === key) {
      return currentBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(key) { // O(1) mostly
  var index = getIndexBelowMaxForKey(key, this._limit);
  var storage = this._storage;
  var currentBucket = storage.get(index);
  for ( var i = 0; i < currentBucket.length; i++) {
    if (currentBucket[i][0] === key) {
      currentBucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


