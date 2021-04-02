'use strict';

const users = [{},{},{},{},{}];
const myArrUsers = new MyArray({},{},{},{},{});

const subscribe = function(elem){
  elem.isSubscribed = true;
}

users.forEach(subscribe);

myArrUsers.forEach(function(elem){
  elem.isSubscribed = true;
});