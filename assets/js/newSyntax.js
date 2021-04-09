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

const u = new User("John", "Smith", 25);
const m = new Moderator("Bob", "Brown", 30, "MANAGE_CHAT");
const a = new Admin('Test', 'Testovich',35);
