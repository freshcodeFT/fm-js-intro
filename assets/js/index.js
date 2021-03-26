'use strict';

let counter = 0;

while (counter <= 10) {
  counter++;
  if(counter % 2 > 0){
    continue;
  }
  console.log(counter);
 
}

console.log("End of loop");