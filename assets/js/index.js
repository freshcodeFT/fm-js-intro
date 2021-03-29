'use strict';

const cat = {
  name: 'Murzik',
  color: 'black',
  breed: 'Sphinx',
  isSleeping: true,
  isMale: true,
  run: function(){
    console.log('I\'m running!!!');
  }
}
cat.isSleeping = false;
cat.color = 'white';
// cat.breed = undefined;
delete cat.breed;

cat.meow = function(){
  console.log("MEOW!");
}

cat.age = 5;

console.log(cat);

cat.meow();