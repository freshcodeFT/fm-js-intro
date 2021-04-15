"use strict";

class Stack {
  constructor(maxSize = 10, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    this.push(...args);
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  /*push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this[`_${this.size}`] = value;
    return ++this._size;
  }*/
  push(...args) {
    for(const item of args){
      if (this.size >= this._maxSize) {
        throw new RangeError("Stack overflow");
      }
      this[`_${this.size}`] = item;
      this._size++;
    }
    return this.size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pip() {
    return this[`_${this.size - 1}`];
  }
}

const stack = new Stack();


// Сделать возможным:

const stack1 = new Stack(15, "val1", "val2", 3, 4, 5);
stack1.push(6, 7, 8, 9, 10);
