'use strict';

const userTel1 = '38042748374';
const userTel2 = '38042748374';
const userTel3 = '38042748374';

const userTels = {
  0: '38089347595',
  1: '38042748374',
  2: '38454548376',
};

userTels[3] = '38000348394';

const arr = ['38089347595', '38042748374', '38454548376', '38000348394'];
arr[arr.length] = 'test';
arr.push(2);
arr.push(7,8,9,10);

const testArr = [];

console.log(userTels);
console.log(arr);

const myArrayProto = {};
myArrayProto.push = function push(item) {
  this[this.length++] = item;
  return this.length;
}

function MyArray(){
  this.length = 0;
}

MyArray.prototype = myArrayProto;


const myArr1 = new MyArray();

const myArr2 = new MyArray();