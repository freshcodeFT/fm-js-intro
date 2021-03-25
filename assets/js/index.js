'use strict';

let numA = +prompt("Write a: ");
let numB = +prompt("Write b: ");

//pure func
function sum(a, b){
  return a + b;
}

//pure func
function sub(a, b){
  return a - b;
}

//pure func
function mul(a, b){
  return a * b;
}

//pure func
function div(a, b){
  return a / b;
}

function sum2(){
  return numA + numB;
}

console.log(sum(numA, numB));
console.log(sum2());

numA = +prompt("Write a: ");
numB = +prompt("Write b: ");

console.log(sum(numA,numB));
console.log(sum2());