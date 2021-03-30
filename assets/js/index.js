'use strict';

const user = {
  firstName: 'Test',
  lastName: 'Testovich',
  age: 18,
  isMale: true,
  sayHello: function(){
    alert(`Hello! My name is ${this.firstName} ${this.lastName}.`)
  },
  isAdult: function(){
    return this.age >= 18;
  },
}

const User = function(firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;

  this.sayHello = function(){
    alert(`Hello! My name is ${this.firstName} ${this.lastName}.`)
  }
  this.isAdult = function(){
    return this.age >= 18;
  }
}

const user1 = new User("John", "Doe", 19, true);
const user2 = new User("Elizabeth", "Smith", 17, false);