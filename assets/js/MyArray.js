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

