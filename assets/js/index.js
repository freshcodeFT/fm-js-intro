'use strict';

const cat = {
  name: 'Murzik',
  color: 'black',
  age: 5,
  breed: 'Sphinx',
  isSleeping: true,
  isMale: true,
  run: function(){
    console.log('I\'m running!!!');
  },
  meow: function(){
    console.log("MEOW!");
  },
}

const Cat = function(name, color, age, breed, isSleeping, isMale){
  this.name = name;
  this.furColor = color;
  this.age = age;
  this.breed = breed;
  this.isSleeping = isSleeping;
  this.isMale = isMale;
  this.run = function(){
    console.log('I\'m running!!!');
  }
  this.meow = function(){
    return this.isSleeping ? 'Zzzzzzz...' : 'Meow!';
  }
  this.toggleSleep = function(){
    this.isSleeping = !this.isSleeping;
  }
  this.incAge = function(){
    this.age++;
  }
}

const cat1 = new Cat('Barsik', 'white', 3, 'Sphinx', false, true);

cat1.meow();