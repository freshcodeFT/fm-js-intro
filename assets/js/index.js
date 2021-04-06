"use strict";

function test(){
  console.log(this);
}

const test2 = function(){
  console.log(this);
}

const test3 = () => {
  console.log(this);
}

test();
test2();
test3();

const obj = {
  test: test,
}