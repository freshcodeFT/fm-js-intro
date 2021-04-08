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
