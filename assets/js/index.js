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


console.log(cat.isSleeping);