'use strict';


/* 
  Создать таблицу умножения
  Разместить её в объекте. 
  При этом ключ - само выражение, а значение - результат умножения
*/
function createMultiplicationTable(){
  const table = {};
  for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
      table[`${i} * ${j}`] = i * j;
    }
  }

  return table;
}