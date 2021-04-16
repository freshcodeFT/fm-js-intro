class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    this.push(...args);
  }

  get size() {
    return this._tail - this._head;
  }

  push(...args) {
    for (const value of args) {
      this[this._tail] = value;
      this._tail++;
    }
    return this.size;
  }

  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }
}

const q = new Queue();
