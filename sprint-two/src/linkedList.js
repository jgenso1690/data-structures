var LinkedList = function() { // O(1)
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // Time complexity: O(1)
    var newNodePointer = Node(value);
    if ( this.head === null) {
      this.head = newNodePointer;
    } else {
      var oldNodePointer = this.tail;
      oldNodePointer.next = newNodePointer;
    }
    this.tail = newNodePointer;
  };

  list.removeHead = function() { // Time complexity: O(1)
    var oldHeadPointer = this.head;
    this.head = oldHeadPointer.next;
    return oldHeadPointer.value;
  };

  list.contains = function(target) { // Time complexity: O(n)
    var currentNode = this.head;
    var lookAgain = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next === null) {
          return false;
        }
        node = node.next;
        return lookAgain(node);
      }
    };
    return lookAgain(currentNode);
  };
  return list;
};

var Node = function(value) { // O(1)
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
