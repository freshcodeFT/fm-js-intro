"use strict";

// str.split(' ').join(' ')

/* 
  Для каждого слова сделать первую буквы большой.

  String.prototype.split
  String.prototype.toUpperCase
  Array.prototype.join
*/
const str = "some string i need";

const capitalize = (str) => str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

console.log(capitalize(str));
