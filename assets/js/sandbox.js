
// Написать сумму произвольного количества чисел
function getSum(){
  let result = null;
  for(let i = 0; i < arguments.length; i++){
    result += +arguments[i];
  }

  return result;
}

