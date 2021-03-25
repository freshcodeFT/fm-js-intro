'use strict';
let global1 = 5;
let global2 = 5;

console.log(test('test: msg'));
console.log(deterministic('determ: msg',global2));

console.log(test('test: msg'));
console.log(deterministic('determ: msg',global2));

global1 *= 2;
global2 *= 2;

console.log(test('test: msg'));
console.log(deterministic('determ: msg',global2));

//func declaration
function test(msg) {
  const result = global1 += 2;
  return msg + result;
}


function deterministic(msg, local){
  const result = local += 2;
  return msg + result;
}