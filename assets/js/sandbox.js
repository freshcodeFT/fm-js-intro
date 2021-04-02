/* 
  new Ladder(); - ЛЕСТНИЦА
  value - та ступенька на который сейчас
  up() - поднимает вас на одну ступеньку
  down() - опускает на одну
  showStep() - показывает на какой вы ступеньке

  Сделать это возможным:
  ladder.up().up().down().showStep(); // 1
*/


function Ladder(){
  this.value = 0;
}

Ladder.prototype = new LadderPrototype();
function LadderPrototype(){
  this.up = function up(){
    this.value++;
    return this;
  }
  this.down = function down(){
    this.value--;
    return this;
  }
  this.showStep = function showStep(){
    return this.value;
  }
}

const ladder = new Ladder();

