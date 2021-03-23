const hello = 'Маша сказала: \n "Привет"';

let num = 8;

num += 4+1;

num -= 5;

num *= 2;

num /= 2;

num **= 2;

let str = "test";

str += "Text";
str -= 2;
console.log(str);

console.log(hello);
// console.log(num--);

// if(num > 8 && num < 20 || hello){
//   console.log("Success");
// }

// if (num % 2 === 0){
//   console.log(num, "Четное");
// }else{
//   console.log(num, "Нечетное");
// }

// const numState = ++num % 2 === 0 ? "Четное" : "Нечетное";

// console.log(num, numState);

if (num % 2 === 0) {
  console.log(num, "Четное");
}

if (num > 50){
  console.log(num, " > 50");
}