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

const highOrderFunc = function (a, b, operationFunc){
  const result = operationFunc(a, b);
  return result;
}

console.log(highOrderFunc(numA, numB, div));