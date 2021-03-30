'use strict';

const user = {
  name: 'John',
  'favorite color': 'red',
  0: 'testData',
  1: 'unique text',
  '5test': '5testValue',
}

user.name = 'Bob';
console.log(user['5test']);

const param = 'favorite color';

console.log(user[param]);
console.log(user.name);

console.log(user['0']);
console.log(user['1']);
console.log(user[0]);
console.log(user[1]);

user[0] = 'test something';
user['1'] = 'test nothing';

user.age = 18;
user['isMale'] = true;

console.log(user);