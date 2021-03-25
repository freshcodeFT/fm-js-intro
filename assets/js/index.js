'use strict';

let numA = +prompt("Write a: ");
let numB = +prompt("Write b: ");
const operator = prompt("Write operator");

const calculationResult = calculate(numA, numB, operator);
console.log(calculationResult);


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

function calculate(numA, numB, operator){

  const highOrderFunc = function (valA, valB, operationFunc){
    const result = operationFunc(valA, valB);
    console.log(operationFunc);
    return result;
  }

  let res = null;

  switch(operator){
    case '+': {
      res = highOrderFunc(numA, numB, sum);
      break;
    }
    case '-': {
      res = highOrderFunc(numA, numB, sub);
      break;
    }
    case '*': {
      res = highOrderFunc(numA, numB, mul);
      break;
    }
    case '/': {
      res = highOrderFunc(numA, numB, div);
      break;
    }
    default: {
      console.log("Wrong operator");
      break;
    }
  }
  return res;
}

// console.log(highOrderFunc(2,5,"*"));
/*
  Создать или доработать калькулятор с использовнием switch так,
  чтобы при выборе операции вызывалась функция высшего порядка,
  в которой вызывается функция, которая соответствует текущей операции (sum, sub, mul, div)
  
  В функции высшего порядка вывести в консоль функцию, которая передается в качестве параметра.

*/