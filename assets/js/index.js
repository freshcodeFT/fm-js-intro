// const userInput = prompt("Enter the message: ");

// alert(userInput);

const userInput1 = prompt("Enter number 1: ");
const userInput2 = prompt("Enter number 2: ");


const getSumOfTwo = function(val1, val2){
  const result = Number(val1) + Number(val2);
  return isNaN(result) ? null : result;
}

const sum = getSumOfTwo(userInput1, userInput2);
console.log(sum);