"use strict";

const nums = [123, 4, 516, 235434, 4556, 88, 413, 782, 343];

const linearSearch = (arr, value) => {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const sortedNums = [1,2,3,5,7,9,150, 275, 380];
// O(log n)
const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);
  //debugger;
  while(start !== end) {
    if(arr[middle] === value) {
      return middle;
    }
    /*if(start === end) 
    {
      return -1;
    }*/
    if (arr[middle] > value){
      end = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
  return -1;
}

const createMultiplicationTable = (limit = 10) => {
  // O(n^2)

  const table = [];

  for(let i = 1; i <= limit; i++){
    for (let j = 1; j <= limit; j++){
      table.push(`${i} * ${j} = ${i * j}`)
    }
  }
  return table;
}
