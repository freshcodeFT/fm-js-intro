const user1 = {
  name: 'John',
  surname: 'Smith',
  age: 21,
  getFullName(){
    return `${this.name} ${this.surname}`;
  },
  isAdult(){
    return this.age >= 18;
  },
}

function User(name, surname, age){
  this.name = name;
  this.surname = surname;
  this.age = age;
}


function UserProto(){
  this.getFullName = function(){
    return `${this.name} ${this.surname}`;
  }
  this.isAdult = function(){
    return this.age >= 18;
  }
}

User.prototype = new UserProto();