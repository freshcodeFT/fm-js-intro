class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  isAdult() {
    return this.age >= 18;
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
  constructor(name, surname, dayRate, workedDays) {
    this.name = name;
    this.surname = surname;
    this.dayRate = dayRate;
    this.workedDays = workedDays;
  }
  getSalary() {
    return this.dayRate * this.workedDays;
  }
}

const worker1 = new Worker( 'Test', 'Testovich', 100, 20 );

class Fuel {
  constructor(volume, density){
    this.volume = volume;
    this.density = density;
  }
  getFuelWeight() {
    return this.volume * this.density;
  }
}

class Auto {
  constructor(model, ownWeight, fuel){
    this.model = model;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }
  getFullWeight(){
    return this.ownWeight + this.fuel.getFuelWeight();
  }
}

const benzin = new Fuel(50, 0.9);
const vw = new Auto('passat', 1200, benzin);

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
  countAllApples(){
    return this.appleAmount + this.friend.appleAmount;
  }

}

const f1 = new Friend('John', 5);
const f2 = new Friend('Bob', 10, f1);
f1.friend = f2;