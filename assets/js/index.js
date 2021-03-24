// const userInput = prompt("Enter the message: ");

// alert(userInput);

// const userInput1 = prompt("Enter number 1: ");
// const userInput2 = prompt("Enter number 2: ");

// const getSumOfTwo = function(val1, val2){
//   const result = Number(val1) + Number(val2);
//   return isNaN(result) ? null : result;
// }

// const sum = getSumOfTwo(userInput1, userInput2);
// console.log(sum);


/*
  1. Функция, которая вернёт максимальное значение из 2.
      Значения брать у пользователя.
  2. Функция, которая вернёт минимальное значение из 2.
      Значения брать у пользователя.

  3. Функция, которая определяет чётность числа.
  
  (*4. Функция, которая решает квадратные уравнения)
*/

/**
 * Solves quadric equations
 * @param {number} a
 * @param {number} b 
 * @param {number} c 
 * @returns {false | null | [number, number]} - returns false on invalid input
 */
function quadricEquation(a, b, c){
  if( isNaN(a - b - c) ) return false;
  if(a === 0) return null;

  const d = b ** 2 - 4 * a * c;
  if(d < 0) return null;
  if(d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }

  const x1 = (-b + d ** (1 / 2)) / (2 * a);
  const x2 = (-b - d ** (1 / 2)) / (2 * a);
  return [x1, x2];
}

const result = quadricEquation(1, 8, 12);
if(!result) {
  console.log("Ошибка вычислений");
} else {
  console.log("x1 =", result[0], "x2 =", result[1]);
}