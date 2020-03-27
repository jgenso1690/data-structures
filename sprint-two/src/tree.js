var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // input: any value
  // output: a tree with methods from the treeMethods object
  // each child may have children or not



  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {   // what object is to the left of the dot?   pointerC.addchild(e) -> var newChild
  var newChild = Tree(value);  // pointerA.addchild(c)  ->  var newChild = Tree(c) -> pointerA.children.push(newChild)
  this.children.push(newChild);  // currentTree = [treeObject that CONTAINS a]
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
