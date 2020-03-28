

// Instantiate a new graph
var Graph = function() {
  this.allNodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  // input: node's value
  // output: object with value === argument
  var allNodes = this.allNodes;
  allNodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(n)
  var allNodes = this.allNodes;
  // loop through the allNodes object and see if a given key is NOT undefined
  // if not undefined, return true
  // if undefined, keep looping
  // after loop finishes, return false
  return _.reduce(allNodes, function(accumulator, item) {
    if (accumulator === true) {
      return true;
    }
    if (item !== undefined) {
      return true;
    }
  }, false);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n)
  // remove all edges the node has with other nodes, and remove all other nodes' edges with it
  // remove value from allNodes
  var allNodes = this.allNodes;
  var edges = allNodes[node];
  // remove node's value from all other nodes connected to it
  // iterate over all edges
  edges.forEach(item => this.removeEdge(item, node));
  // removeEdge(node) on each
  // remove node's value from allNodes
  delete allNodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(1)
  // input: two values (that are keys in allNodes)
  // output: boolean - are they connected
  var currentNode = fromNode;
  var allNodes = this.allNodes;
  return allNodes[currentNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  // pushing the toNode value to fromNode's array
  // pushing the fromNode value to the toNode's array
  var allNodes = this.allNodes;
  allNodes[fromNode].push(toNode);
  allNodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(1)
  // input: two nodes (that are keys within allNodes)
  // output: nothing
  // side effect: remove each node's value from the connected node's array
  var allNodes = this.allNodes;
  var firstNode = allNodes[fromNode];
  var secondNode = allNodes[toNode];
  // find the secondNode's value within the firstNode's array, and remove it
  firstNode.splice(firstNode.indexOf(toNode), 1);
  secondNode.splice(secondNode.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  var allNodes = this.allNodes;
  // Object.keys(allNodes) = a new array of the original node values
  var oldKeys = Object.keys(allNodes);
  // store the result of executing the callback function on the array of keys
  _.each(oldKeys, item => cb(item));
  // iterate over the list of new values
  // for (var i = 0; i < oldKeys.length; i++) {
  //   // at each index, assign the value of the original array at the same index to the new key
  //   allNodes[newKeys[i]] = allNodes[oldKeys[i]];
  // }
  // for (var i = 0; i < oldKeys.length; i++) {
  //   if (!newKeys.includes(oldKeys[i]))
  //   this.removeNode(oldKeys[i]);
  // }
  // delete the old key
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


