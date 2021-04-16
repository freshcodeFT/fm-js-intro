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
