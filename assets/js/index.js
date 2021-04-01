'use strict';

const student1 = {
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
  isMale: true,
}

function Student(firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
}

Student.prototype = new StudentPrototype();

function StudentPrototype(){
  this.toString = function toString(){
    return `${this.firstName} ${this.lastName}. I'm ${this.age} years old `;
  }
  this.sayHello = function sayHello(){
    return `${this.firstName} ${this.lastName} says hello!`;
  }
  this.say = function say(message){
    return `Студент ${this.firstName} говорит:\n${message}`;
  }
}
/*
  say() метод, принимающий строку и возвращающий строку
  в таком формате:
  Студент <Имя студента> говорит:
  <содержимое принятой строки>
*/

const student2 = new Student('Bob', 'Black', 25, true);