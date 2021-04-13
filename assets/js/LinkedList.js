class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }
  next() {
    this.currentNode = this.currentNode
      ? this.currentNode.next
      : this.list.head;
      return {
        value: this.currentNode ? this.currentNode.value : undefined,
        done: !this.currentNode,
      }
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.push(...args);
  }
  push(...args) {
    for (const item of args) {
      const newNode = new LinkedListNode(item);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

class LinkedListNode {
  constructor(v) {
    this.value = v;
    this.next = null;
    this.prev = null;
  }
  set value(newValue) {
    this._value = newValue;
  }
  get value() {
    return this._value;
  }
  set prev(prev) {
    if (!prev instanceof LinkedListNode) {
      throw new TypeError();
    }
    this._prev = prev;
  }
  get prev() {
    return this._prev;
  }
  set next(next) {
    if (!next instanceof LinkedListNode) {
      throw new TypeError();
    }
    this._next = next;
  }
  get next() {
    return this._next;
  }
}

/*
next, prev должны быть instanceof LinekdListNode
Если это не так - выводить TypeError
*/
