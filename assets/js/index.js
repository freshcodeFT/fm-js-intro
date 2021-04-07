"use strict";

function countDown(num) {
  //debugger;
  console.log(num);
  if (num > 0) {
    countDown(num - 1); // recursion
  }
  return true; // base
}

const power = (num, exp) => {
  //debugger;
  if (exp <= 1) {
    return num; // base
  }
  return num * power(num, exp - 1); // recursion
};

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const factorialIfs = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const logRange = (min, max) => {
  //debugger;
  if(min > max){
    return false;
  }
  console.log(min);
  logRange(min + 1, max);
  return true;
}

/*
Этапы рекурсии:
  1) Функции вызываются рекурсивно и записываются в call stack
  2) Доходим до базы
  3) Функции начнут завершать свою работу
*/
