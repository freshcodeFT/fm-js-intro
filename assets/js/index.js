"use strict";

const mySymbol = Symbol('test');

const obj = {
  test: 'test',
  [mySymbol]: 5
};

const obj2 = {
  test: 'test',
  [mySymbol]: 5
};

const myMap = new Map();
myMap.set(1, {});
myMap.set('1', true);
myMap.set(1, 10000);
myMap.set(obj, 'testValue');
myMap.set(obj2, 'anotherValue');

console.log(myMap.get(1));