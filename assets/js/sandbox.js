class Test {
  static PI = 3.14
  static sum(a,b){
    return a + b;
  }
}

/*
  string - '' String(), new String()
  number - numbers, NaN, Infinity, -Infinity, -0, +0, Number(), new Number()
  BigInt - 50n BigInt(), new BigInt()
  undefined - undefined
  null - null
  bool true, false Boolean(), new Boolean()
  symbol - ???
  Object {param: value}, Object(), new Object()
*/

const mySymbol1 = Symbol('Symbol.Important');
const mySymbol3 = Symbol('Symbol.Important');
const mySymbol2 = Symbol('Просто метка');

const keyName = 'some key name';

const obj = {
  login: 'testLogin',
  test: 'something',
  mySymbol1: 100,
  [5]: 50,
  [keyName]: 333,
  ['some text']: 'some value',
  [mySymbol1]: 10,
}

console.log(obj[5])
console.log(obj['some text'])
console.log(obj[mySymbol3])