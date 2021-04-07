/**
 * 
 * @param {function} how 
 * @param {string} whatToSay 
 */
function saySomething(how, whatToSay){
  //console.log(whatToSay);
  how(whatToSay);
}

function withLog(fn){
  return function(...args){
    const result = fn(...args);
    console.log(result);
    return result;
  }
}

/*const sumWithLog = withLog(sum);

const getFullName = function(name, surname){
  return `${name} ${surname}`
}

const getFullNameWithLog = withLog(getFullName);*/

//const res = getFullNameWithLog('John', 'Smith');

const num =  +prompt("Write number");

const result = isNaN(num) ? 'Wrong number' : `Number: ${num}`;


let res2;

if(isNaN(num)){
  res2 = 'Wrong number';
} else {
  res2 = `Number: ${num}`;
}

console.log(result);