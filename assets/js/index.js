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

console.log(userTels);
console.log(arr);

function MyArray(){
  this.length = 0;
  this.push = function push(item) {
    this[this.length++] = item;
    return this.length;
  }
}

const myArr = new MyArray();

const t1 = 1;
const t2 = 1;

const obj1 = {divan: 'black'};
const obj2 = {divan: 'black'};

const link1 = obj1;

console.log(obj1 === obj2); // false
console.log(link1 === obj2) // false
console.log(obj1 === link1); // true

link1.table = "brown";

console.log(obj1);