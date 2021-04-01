
// Написать сумму произвольного количества чисел
function getSum(){
  let result = null;
  for(let i = 0; i < arguments.length; i++){
    result += +arguments[i];
  }

  return result;
}

const car = {
  go() {
    return this.name;
  }
}

const driver1 = {
  name: 'John Smith',
}

const driver2 = {
  name: 'John Doe',
}

driver1.__proto__ = car;
driver2.__proto__ = car;

/*
Напишите функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. 
Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего,
что ввёл пользователь при вызовах метода read(),
с учётом начального значения startingValue. 
*/

function Accumulator(startingValue){
  this.value = isFinite(startingValue) ? +startingValue : 0;
}

Accumulator.prototype = new AccumulatorPrototype();

function AccumulatorPrototype(){
  this.read = function read(){
    const userNumber = +prompt("Введите число: ");
    if(!isFinite(userNumber)) return this.value;

    return this.value += userNumber;
  }
}

const accumulator = new Accumulator();
