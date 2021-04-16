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

/* Easy level: Сделать такое создание очереди возможным */
const q1 = new Queue(1, 3, 5, 7, 9, 11, 13, 15);
const q2 = new Queue(2, 4, 6, 8);

/*
Advanced level:
mergeQueues(q1,q2)
Функция, которая сливает две очереди в одну.
Элементы из очередей становятся в новую очередь поочерёдно.
*/

const mergeQueries = (q1, q2) => {
  const result = new Queue();

  while(q1.size || q2.size){
    if(q1.size !== 0){
      result.push(q1.pop());
    }
    if(q2.size !== 0){
      result.push(q2.pop());
    }
  }

  return result;
};
