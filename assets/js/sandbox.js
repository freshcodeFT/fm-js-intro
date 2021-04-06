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