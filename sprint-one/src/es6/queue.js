class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  enqueue(value) {
    var counter = this.count;
    this[counter] = value;
    this.count++;
  }

  dequeue() {
    var firstElement = this['0'];
    if (this.count > 0) {
      this.count--;
    }
    for (var i = 0; i < this.count; i++) {
      this[i] = this[i + 1];
    }
    return firstElement;
  }

  size() {
    return this.count;
  }
}
