"use strict";

const t1 = function(){
  console.log(arguments);
}

const t2 = () => {
  console.log(arguments); // error. arguments is not defined
}

t1(1,2,3,4,5)
// t2(1,2,3,4,5)

function sum(){
  let res = null;
  for(let i = 0; i < arguments.length; i++){
    res += arguments[i];
  }
  return res;
}