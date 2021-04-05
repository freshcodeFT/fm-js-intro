function MyArrayProto(){
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++){
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  this.pop = function pop(){
    if(this.length === 0) return;

    const lastValue = this[this.length-1];
    delete this[--this.length];
    return lastValue;
  }
  this.unshift = function unshift(){
    for(let i = this.length - 1; i >= 0; i--){
      this[i + arguments.length] = this[i];
    }
    for(let i = 0; i < arguments.length; i++){
      this[i] = arguments[i];
    }
    return this.length += arguments.length;
  }
  this.shift = function shift(){
    if(this.length === 0) return;
    const firstElem = this[0];
    for(let i = 0; i < this.length - 1; i++){
      this[i] = this[i + 1]
    }
    delete this[--this.length];
    return firstElem;
  }
  /**
   * 
   * @param {function} callback 
   */
  this.forEach = function forEach(callback){
    for( let i = 0; i < this.length; i++){
      callback(this[i], i, this);
    }
  }
}

function MyArray(){
  this.length = 0;
  for (let i = 0; i < arguments.length; i++){
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayProto();

