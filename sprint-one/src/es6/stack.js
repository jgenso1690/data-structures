class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  push(value) {
    var counter = this.count;
    this[counter] = value;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
    }
    var lastElement = this.count;
    return this[lastElement];
  }

  size() {
    return this.count;
  }

}