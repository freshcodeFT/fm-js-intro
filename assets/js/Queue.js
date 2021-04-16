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

  duplicate (){
    const newQueue = new Queue();
    for(let i = this._head; i < this._tail; i++){
      newQueue.push(this[i]);
    }
    return newQueue; 
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
  const tempQ1 = q1.duplicate();
  const tempQ2 = q2.duplicate();

  while(tempQ1.size || tempQ2.size){
    if(tempQ1.size !== 0){
      result.push(tempQ1.pop());
    }
    if(tempQ2.size !== 0){
      result.push(tempQ2.pop());
    }
  }

  return result;
};
