class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
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
  static isUser(user) {
    return user instanceof User;
  }
}

const u = new User("John", "Smith", 25);

/*
  Реализовать класс Рабочий (Worker)
  У рабочего есть имя, фамилия, ставка за день,
  кол-во отработанных дней.
  Метод, который будет возвращать з\п работника.
*/

class Worker {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} dayRate
   * @param {number} workedDays
   */
  constructor(name, surname, dayRate, workedDays) {
    this.name = name;
    this.surname = surname;
    this.dayRate = dayRate;
    this.workedDays = workedDays;
  }
  set dayRate(newRate) {
    if (typeof newRate !== "number") {
      throw new TypeError("Parameter has unappropriate type");
    }
    this._dayRate = newRate;
  }
  get dayRate() {
    return this._dayRate;
  }

  set workedDays(newWorkedDays) {
    if (typeof newWorkedDays !== "number") {
      throw new TypeError("Parameter has unappropriate type");
    }
    if (newWorkedDays < 0 || newWorkedDays > 31) {
      throw new RangeError("Wrong days range");
    }
    this._workedDays = newWorkedDays;
  }

  get workedDays() {
    return this._workedDays;
  }

  get salary() {
    return this.dayRate * this.workedDays;
  }
}

const worker1 = new Worker("Test", "Testovich", 100, 20);

class Fuel {
  /**
   *
   * @param {number} volume
   * @param {number} density
   */
  constructor(volume, density) {
    this.volume = volume; //setter, getter
    this.density = density; //setter, getter
  }
  getFuelWeight() {
    //getter
    return this.volume * this.density;
  }
}

class Auto {
  /**
   *
   * @param {number} model
   * @param {number} ownWeight
   * @param {Fuel} fuel
   */
  constructor(model, ownWeight, fuel) {
    this.model = model; //setter, getter,
    this.ownWeight = ownWeight; //setter, getter
    this.fuel = fuel; //setter, getter (instanceOf)
  }
  getFullWeight() {
    //getter
    return this.ownWeight + this.fuel.getFuelWeight();
  }
}

const benzin = new Fuel(50, 0.9);
const vw = new Auto("passat", 1200, benzin);

class Friend {
  /**
   * @param {string} name
   * @param {number} appleAmounnt
   * @param {Friend} friend
   */
  constructor(name, appleAmount, friend) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friend = friend;
  }
  countAllApples() {
    return this.appleAmount + this.friend.appleAmount;
  }
}

const f1 = new Friend("John", 5);
const f2 = new Friend("Bob", 10, f1);
f1.friend = f2;
