var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // input: any value
  // output: a tree with methods from the treeMethods object
  // each child may have children or not



  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild)
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length === 0) {
    return false;
  } else {
    return _.reduce(this.children, function(accumulator, item) {
      if (accumulator === true) {
        return true;
      }
      return item.contains(target);
    }, false, this);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
