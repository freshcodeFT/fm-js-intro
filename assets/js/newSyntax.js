class User {
  constructor(name, surname, age, isBanned = false) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }
  set fullName(newFullName) {
    const splittedFullName = newFullName.split(" ");
    this.name = splittedFullName[0];
    this.surname = splittedFullName[1];
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  get isAdult() {
    return this.age >= 18;
  }
  set isBanned(isBanned){
    if(typeof isBanned === 'boolean'){
      this._isBanned = isBanned;
    }
  }
  get isBanned(){
    return this._isBanned;
  }
  static isUser(user) {
    return user instanceof User;
  }
}

class Moderator extends User {
  constructor(name, surname, age, permission) {
    super(name, surname, age); // Вызываем родительский конструктор
    this.permission = permission;
  }
  createMessage(msgBody) {}
  deleteMessage(id) {}
}

/* 
  Создать class Admin, который расширяет User
  Реализовать ф-ю ban
 */
class Admin extends Moderator {
  constructor(name, surname, age) {
    super(name, surname, age, false);
  }
  ban(user){
    if(!User.isUser(user)){
      throw new TypeError('Wrong user');
    }
    user.isBanned = true;
  }
  unban(user){
    if(!User.isUser(user)){
      throw new TypeError('Wrong user');
    }
    user.isBanned = false;
  }
  toggleBan(user){
    if(!User.isUser(user)){
      throw new TypeError('Wrong user');
    }
    user.isBanned = !user.isBanned;
  }
}

class Squirrel {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  eat(){
    return `${this.name} is eating`;
  }
  climb(){
    return `${this.name} is climbing`;
  }
}

class FlyingSquirrel extends Squirrel{
  constructor(name, color, distance){
    super(name, color);
    this.distance = distance;
  }
  fly(dist){
    debugger;
    if(dist > this.distance){
      throw new Error('Can`t fly');
    }
    return `${this.name} is flying`;
  }
}

const sq = new Squirrel('Jelly', 'brown');

const fsq = new FlyingSquirrel('Belly', 'black', 20)
