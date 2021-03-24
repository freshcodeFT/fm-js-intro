const userInput = +prompt("Выберите напиток:\n1 - Кофе\n 2 - Чай\n 3 - Сок ");

switch (userInput) {
  case 1:{
    console.log("Кофе");
    break;
  }
  case 2:{
    console.log("Чай");
    break;
  }
  case 3:{
    console.log("Сок");
    break;
  }
  case 4:
  case 5:
  case 6: {
    console.log("Секретный напиток");
    break;
  }
  default: {
    console.log("Такого напитка нет");
  }
}

/*
  С помощью switch:
  В переменной day лежит какое-то число из интервала от 1 до 31
  Определите в какую декаду месяца попадает это число 
  (в первую, вторую или третью).
*/

/*
  Напишите калькулятор. 2 Числа и операцию спрашивать у пользователя.
*/