"use strict";

/*
  1. Спрашивать у пользователя пароль до тех пор, 
    пока он не введет правильный.
    1.1. Ограничить кол-во попыток до 5.
*/

// let triesCounter = 0;

// while (triesCounter < MAX_TRIES) {
//   const userPass = prompt("Enter your password: ");
//   if (userPass === GOOD_PASSWORD) {
//     console.log("Success");
//     break;
//   }
//   console.log("Error");
//   triesCounter++;
// }

/* 2. Найти факториал числа */

function factorial(num) {
  if( num < 0 ) return null;
  
  let factCounter = 1;
  let countedFactorial = BigInt(1);

  while (factCounter < num) {
    factCounter++;
    countedFactorial *= BigInt(factCounter);
  }
  return countedFactorial;
}
const factNumber = +prompt("Enter number: ");
console.log(factorial(factNumber));

/* 3. Возвести число в заданную степень (power) с помощью цикла */
