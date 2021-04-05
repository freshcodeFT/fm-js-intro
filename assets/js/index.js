'use strict';

const users = [{},{},{},{},{}];
const myArrUsers = new MyArray({},{},{},{},{});

const subscribe = function(elem){
  elem.isSubscribed = true;
}

users.forEach(subscribe);

myArrUsers.forEach(function(elem){
  elem.isSubscribed = true;
});

const numsArray = [1,2,3,4,5];
const numsMyAray = new MyArray(1,2,3,4,5);

function square(currentNumber){

  const result = currentNumber * currentNumber;
  //console.log(result);
  return result;
}

numsArray.forEach(square);
numsMyAray.forEach(function(currentNumber, index, arr){
  arr[index] = square(currentNumber);
});

const myArray = new MyArray(1,2,3,4,5,6,7, 8);