"use strict";

const vocabulary = new Map();

vocabulary.set("cat", "кот");
vocabulary.set("dog", "собака");
vocabulary.set("table", "стол");
vocabulary.set("screen", "экран");
vocabulary.set("structure", "структура");
vocabulary.set("algorithm", "алгоритм");
vocabulary.set("count", "считать");
vocabulary.set("set", "установить");
vocabulary.set("kernel", "ядро");
vocabulary.set("queue", "очередь");

const inputStr =
  "Cat counT Dog set queue Kernel algOrithm strUcTure of the TABLE";

const translate = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return vocabulary.has(word) ? vocabulary.get(word) : word;
    })
    .join(" ");
};

console.log(translate(inputStr));
/*
  Есть 2 объекта с пользователями и 2 массива с их сообщениями.
  1. Нужно объединить пользователей и их сообщения используя Map.
  2. Написать функцию, которая принимает пользователя и возвращает его сообщения.
*/
const user1 = {
  id: 1,
  name: 'John',
  age: 18,
};
const user2 = {
  id: 2,
  name: 'Jane',
  age: 24,
};

const newUser = {
  id: 1,
  name: 'John',
  age: 18,
};


const johnMsgs = ['2134', 'wsefsef', 'sefsdfsdfsef'];
const janeMsgs = ['werfsg', 'sdfsdf', 'sdfsdfs', 'sdfsdfsd'];

const usersMap = new Map();
usersMap.set(user1.id, johnMsgs);
usersMap.set(user2.id, janeMsgs);

const getUserMsgs = (userId) => usersMap.get(userId);
