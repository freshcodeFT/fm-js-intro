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

t1(1, 2, 3, 4, 5);
// t2(1,2,3,4,5)


const t3 = (a,b,...args) => {
  console.log(a,b);
  console.log(...args);
}

function sumArgs() {
  let res = null;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

const sumArrowFE = (...rest) => {
  let accumulator = null;
  rest.forEach((currentValue) => {
    accumulator += currentValue;
  });
  return accumulator;
};

const sumArrowReduce = (...rest) => {
  return rest.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

const numbers = [1, 1, 32, 15, 122, 1537, 5, 4, 8];
const numbers2 = [1234, 1324, 43, 4567, 7];

const numbers3 = [...numbers, ...numbers2];