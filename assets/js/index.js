"use strict";

const subscribe = function (elem) {
  elem.isSubscribed = true;
};

function square(currentNumber) {
  const result = currentNumber * currentNumber;
  //console.log(result);
  return result;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numsArr = [];
for (let i = 0; i < 10; i++) {
  numsArr.push(getRandomIntInclusive(100, 200));
}

function User(firstName, lastName, email, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}

User.prototype = new UserProto();

function UserProto(){
  this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
}

/* 
  1. Создать прототип для User. 
  2. Создать ф-ю getFullName, которая вернет строку с  именем и фамилией пользователя
  3. Добавить рандомную генерацию подписок (значение поля isSubscribed)
*/

function getRandomUsers(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(
      new User(
        `Name${i}`, //first name
        `Surname${i}`, //last name
        `user${i}@gmail.com`, //email
        getRandomIntInclusive(12, 50), //age
        Math.random() < 0.5, //isMale
        Math.random() < 0.5 //isSubscribed
      )
    );
  }
  return usersArray;
}
