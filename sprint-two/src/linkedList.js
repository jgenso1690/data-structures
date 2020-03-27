var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //
    //get a new node
    var newNodePointer = Node(value);  // list.tail = old node
    // if there's no .head value, assign new node to list.head
    if ( this.head === null) {
      this.head = newNodePointer;
    } else {
      var oldNodePointer = this.tail;  // list.tail = still equals the old node
      oldNodePointer.next = newNodePointer;
    }
    //assign list.tail node's .next to new node
    // newNode.next = this.tail;
    //assign new node to .tail
    this.tail = newNodePointer;
  };

  list.removeHead = function() {

    var oldHeadPointer = this.head;
    this.head = oldHeadPointer.next;

    return oldHeadPointer.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    //start at the first node
    var lookAgain = function(node) {
      if (node.value === target) {
      //check if node contains target value
       //if it does -> true
        return true;
      } else {
        if (node.next === null) {
          return false;
        }
        node = node.next;
        return lookAgain(node);
      }
    }
    return lookAgain(currentNode);
  }
       //if not, check next node
    //if this is the last node and it doesn't have the value -> false

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
